// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, MoreThanOrEqual, LessThanOrEqual, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetAllUsersDto

 } from './dto/get-all-user.dto';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create({ ...dto, password_hash: dto.password });
    return this.userRepo.save(user);
  }

  async findById(id: string): Promise<User> {
    return this.userRepo.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepo.findOne({ where: { email }, select: ['id', 'password_hash'] });
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.userRepo.update(id, dto);
    return this.findById(id);
  }

  async softDelete(id: string) {
    await this.userRepo.softDelete(id);
  }

  async listUsers(filter: GetAllUsersDto): Promise<User[]> {
    const { role, status, search, createdFrom, createdTo } = filter;

    const where: any = {};
    if (role) where.role = role;
    if (status) where.status = status;
    if (search) {
      where.full_name = Like(`%${search}%`);
    }
    if (createdFrom || createdTo) {
      where.created_at = {};
      if (createdFrom) where.created_at[MoreThanOrEqual] = createdFrom;
      if (createdTo) where.created_at[LessThanOrEqual] = createdTo;
    }

    return this.userRepo.find({ where });
  }
}
