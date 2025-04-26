import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { GetAllUserDto } from './dto/get-all-user.dto';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { paginate } from 'nestjs-typeorm-paginate';
import { IsNull, Not } from 'typeorm';
import { UserRole } from './entities/user.entity';
import { ValidationException } from 'utils/validation-exception-formatter';
import { ParamIdDto } from '../shared/dtos/paramId.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto, currentUser: User) {
    const isEmailExist = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (isEmailExist)
      throw new ValidationException({ email: 'Email is already exist' });

    if (
      createUserDto?.role === UserRole.ADMIN &&
      currentUser.role != UserRole.SUPER_ADMIN
    ) {
      throw new ForbiddenException(`you can't create another admin`);
    }

    const user = this.usersRepository.create({ ...createUserDto });

    // const stripeCustomer = await this.stripe.customers.create({
    //   email: createUserDto.email,
    //   name: `${createUserDto.first_name} ${createUserDto.last_name}`,
    // });

    await user.save();
    // await this.notificationsService.createUserNotificationSetting(user);

    const { password, ...userData } = user;
    return userData;
  }

  async findAll(currentUser: User, getAllDto: GetAllUserDto) {
    const { page, per_page, search, status, role, end_date, start_date } =
      getAllDto;

    const query = this.usersRepository
      .createQueryBuilder('users')
      .where('users.role != :excludeSuperAdmin AND users.deleted_at IS NULL', {
        excludeSuperAdmin: UserRole.SUPER_ADMIN,
      })
      .orderBy('created_at', 'DESC');

    if (currentUser?.role === UserRole.ADMIN) {
      query.andWhere('users.role != :excludeAdmin', {
        excludeAdmin: UserRole.ADMIN,
      });
    }

    if (role) {
      query.andWhere('users.role = :role', { role: role });
    }

    if (search) {
      query.andWhere(
        `(users.first_name || ' '  || users.last_name ILIKE :search OR users.email ILIKE :search)`,
        { search: `%${search}%` },
      );
    }

    if (status) {
      query.andWhere('users.status = :status', { status });
    }

    if (start_date) {
      query.andWhere('users.created_at >= :start_date', { start_date });
    }

    if (end_date) {
      query.andWhere('users.created_at <= :end_date', { end_date });
    }

    const paginationOptions: IPaginationOptions = {
      page: page ?? 1,
      limit: per_page ?? 10,
    };

    return await paginate<User>(query, paginationOptions);
  }

  async findOne(id: ParamIdDto, currentUser: User) {
    const user = await this.usersRepository.findOne({
      where: id,
    });

    if (!user) throw new NotFoundException('Organization not found');

    // validateOneUser(currentUser, user);

    return user;
  }

  async update(
    { id }: ParamIdDto,
    updateUserDto: UpdateUserDto,
    currentUser: User,
  ) {
    const user = await this.usersRepository.findOne({
      where: { id, deleted_at: IsNull() },
    });

    if (!user) throw new NotFoundException('User not found');

    // svalidateUser(id, currentUser, updateUserDto, user);

    if (updateUserDto?.email) {
      const user = await this.usersRepository.findOne({
        where: { email: updateUserDto.email, id: Not(id) },
      });

      if (user) throw new NotFoundException('this email already exist');
    }

    Object.assign(user, updateUserDto);

    return user.save();
  }

  async remove(currentUser: User) {
    const user = await this.usersRepository.findOne({
      where: { id: currentUser.id, deleted_at: IsNull() },
    });

    if (!user) throw new NotFoundException('User not found');

    if (user?.role === UserRole.SUPER_ADMIN)
      throw new BadRequestException(
        `A Super Admin cannot delete their own account.`,
      );

    user.deleted_at = new Date();
    await user.save();
  }
}
