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
import { ValidationException } from '@nestjs/common';
import { GetAllUserDto } from './dto/get-all-user.dto';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { paginate } from 'nestjs-typeorm-paginate';
import { IsNull, Not } from 'typeorm';
import { UserRole } from './entities/user-role.entity';
import { validateOneUser, validateUser } from './utils/user-validation';
import { countriesRepository } from './repositories/countries.repository';
import { companyTypesRepository } from './repositories/company-types.repository';
import { notificationsService } from './services/notifications.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @Inject(countriesRepository)
    private readonly countriesRepository: Repository<User>,
    @Inject(companyTypesRepository)
    private readonly companyTypesRepository: Repository<User>,
    @Inject(notificationsService)
    private readonly notificationsService: NotificationsService,
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

    const stripeCustomer = await this.stripe.customers.create({
      email: createUserDto.email,
      name: `${createUserDto.first_name} ${createUserDto.last_name}`,
    });

    await user.save();
    await this.notificationsService.createUserNotificationSetting(user);

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
      page: page,
      limit: per_page,
    };

    return await paginate<User>(query, paginationOptions);
  }

  async findOne({ id }: ParamIdDto, currentUser: User) {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: {
        profile_image: true,
        banner_image: true,
        country: true,
        company_type: true,
      },
    });

    if (!user) throw new NotFoundException('Organization not found');

    validateOneUser(currentUser, user);

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

    validateUser(id, currentUser, updateUserDto, user);

    if (updateUserDto?.email) {
      const user = await this.usersRepository.findOne({
        where: { email: updateUserDto.email, id: Not(id) },
      });

      if (user) throw new NotFoundException('this email already exist');
    }

    if (
      updateUserDto.country_id &&
      updateUserDto.country_id !== user?.country?.id
    ) {
      const country = await this.countriesRepository.findOne({
        where: { id: updateUserDto.country_id },
      });

      if (!country) throw new NotFoundException('Country not found');

      user.country = country;
    }

    if (
      user.country &&
      typeof updateUserDto.country_id === 'string' &&
      updateUserDto.country_id.length < 1
    ) {
      user.country = null;
    }

    if (
      updateUserDto.company_type_id &&
      updateUserDto.company_type_id !== user?.company_type?.id
    ) {
      const companyType = await this.companyTypesRepository.findOne({
        where: { id: updateUserDto.company_type_id },
      });

      if (!companyType) throw new NotFoundException('Company Type not found');

      user.company_type = companyType;
    }

    if (
      user.company_type &&
      typeof updateUserDto.company_type_id === 'string' &&
      updateUserDto.company_type_id.length < 1
    ) {
      user.company_type = null;
    }

    Object.assign(user, updateUserDto);

    return user.save();
  }

  async remove(currentUser: User) {
    const user = await this.usersRepository.findOne({
      where: { id: currentUser.id, deleted_at: IsNull() },
    });

    if (user?.role === UserRole.SUPER_ADMIN)
      throw new BadRequestException(
        `A Super Admin cannot delete their own account.`,
      );

    user.deleted_at = new Date();
    await user.save();
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
