import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserActivityDto } from './dto/create-user-activity.dto';
import { UserActivity } from './entities/user-activity.entity';

@Injectable()
export class UserActivityService {
  constructor(
    @InjectRepository(UserActivity)
    private readonly userActivityRepository: Repository<UserActivity>,
  ) {}

  async create(createUserActivityDto: CreateUserActivityDto): Promise<UserActivity> {
    const userActivity = this.userActivityRepository.create(createUserActivityDto);
    return this.userActivityRepository.save(userActivity);
  }

  async findAll(): Promise<UserActivity[]> {
    return this.userActivityRepository.find();
  }

  async findOne(id: number): Promise<UserActivity> {
    const userActivity = await this.userActivityRepository.findOne(id);
    if (!userActivity) {
      throw new NotFoundException('UserActivity not found');
    }
    return userActivity;
  }

  async update(id: number, updateUserActivityDto: Partial<CreateUserActivityDto>): Promise<UserActivity> {
    await this.userActivityRepository.update(id, updateUserActivityDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.userActivityRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('UserActivity not found');
    }
  }
}
