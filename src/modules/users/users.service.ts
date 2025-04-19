// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  GetAllUsersDto

} from './dto/get-all-user.dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ) { }

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create({ ...dto, password_hash: dto.password });
    return this.userRepo.save(user);
  }

  async findById(id: string) {
    return this.userRepo.findOne({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email }, select: ['id', 'password_hash'] });
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.userRepo.update(id, dto);
    return this.findById(id);
  }

  async softDelete(id: string) {
    await this.userRepo.softDelete(id);
  }

  async listUsers(filter: GetAllUsersDto): Promise<Pagination<User>> {
    const { role, status, search, createdFrom, createdTo, page, limit } = filter;

    const queryBuilder = this.userRepo.createQueryBuilder('user');

    if (role) queryBuilder.andWhere('user.role = :role', { role });
    if (status) queryBuilder.andWhere('user.status = :status', { status });
    if (search) queryBuilder.andWhere('user.full_name ILIKE :search', { search: `%${search}%` });
    if (createdFrom) queryBuilder.andWhere('user.created_at >= :createdFrom', { createdFrom });
    if (createdTo) queryBuilder.andWhere('user.created_at <= :createdTo', { createdTo });

    queryBuilder.orderBy('user.created_at', 'DESC');

    const options: IPaginationOptions = {
      page: page || 1,
      limit: limit || 10,
    };
    return paginate<User>(queryBuilder, options);
  }
}
