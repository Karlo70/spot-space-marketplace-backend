// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from './entities/user.entity';
import { CreateUserDto} from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create({ ...dto, password_hash: dto.password });
    return this.userRepo.save(user);
  }

  async findById(id: string) {
    return this.userRepo.findOne({ where: { id } });
  }

  async findByEmail(email: string){
    return this.userRepo.findOne({ where: { email }, select: ['id', 'password_hash'] });
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.userRepo.update(id, dto);
    return this.findById(id);
  }

  async softDelete(id: string) {
    await this.userRepo.softDelete(id);
  }

  async listUsersByRole(role: UserRole) {
    return this.userRepo.find({ where: { role } });
  }
}
