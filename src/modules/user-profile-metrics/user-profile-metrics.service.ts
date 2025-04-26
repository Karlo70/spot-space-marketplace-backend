import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserProfileMetricDto } from './dto/create-user-profile-metric.dto';
import { UserProfileMetric } from './entities/user-profile-metric.entity';

@Injectable()
export class UserProfileMetricsService {
  constructor(
    @InjectRepository(UserProfileMetric)
    private readonly userProfileMetricsRepository: Repository<UserProfileMetric>,
  ) {}

  async create(createUserProfileMetricDto: CreateUserProfileMetricDto): Promise<UserProfileMetric> {
    const userProfileMetric = this.userProfileMetricsRepository.create(createUserProfileMetricDto);
    return this.userProfileMetricsRepository.save(userProfileMetric);
  }

  async findAll(): Promise<UserProfileMetric[]> {
    return this.userProfileMetricsRepository.find();
  }

  async findOne(id: number): Promise<UserProfileMetric> {
    const userProfileMetric = await this.userProfileMetricsRepository.findOne(id);
    if (!userProfileMetric) {
      throw new NotFoundException('UserProfileMetric not found');
    }
    return userProfileMetric;
  }

  async update(id: number, updateUserProfileMetricDto: Partial<CreateUserProfileMetricDto>): Promise<UserProfileMetric> {
    await this.userProfileMetricsRepository.update(id, updateUserProfileMetricDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.userProfileMetricsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('UserProfileMetric not found');
    }
  }
}
