// src/user-profiles/user-profiles.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { UserProfile } from './entities/user-profile.entity';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { GetAllUserProfilesDto } from './dto/get-all-user-profiles.dto';

@Injectable()
export class UserProfilesService {
  constructor(@InjectRepository(UserProfile) private repo: Repository<UserProfile>) {}

  create(userId: string, dto: CreateUserProfileDto) {
    return this.repo.save({ ...dto, user: { id: userId } });
  }

  async update(id: string, dto: UpdateUserProfileDto) {
    await this.repo.update(id, dto);
    return this.repo.findOne({ where: { id }, relations: ['user'] });
  }

  async findById(id: string) {
    return this.repo.findOne({ where: { id }, relations: ['user'] });
  }

  async findAll(filter: GetAllUserProfilesDto): Promise<Pagination<UserProfile>> {
    const { city, country, search, page, limit } = filter;

    const qb = this.repo.createQueryBuilder('profile');

    if (city) qb.andWhere('profile.city ILIKE :city', { city: `%${city}%` });
    if (country) qb.andWhere('profile.country ILIKE :country', { country: `%${country}%` });
    if (search) qb.andWhere('profile.bio ILIKE :search OR profile.website ILIKE :search', { search: `%${search}%` });

    qb.orderBy('profile.created_at', 'DESC');

    return paginate<UserProfile>(qb, { page, limit });
  }
}
