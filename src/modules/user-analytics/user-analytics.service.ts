import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserAnalyticDto } from './dto/create-user-analytic.dto';
import { UserAnalytic } from './entities/user-analytic.entity';

@Injectable()
export class UserAnalyticsService {
  constructor(
    @InjectRepository(UserAnalytic)
    private readonly userAnalyticsRepository: Repository<UserAnalytic>,
  ) {}

  async create(createUserAnalyticDto: CreateUserAnalyticDto): Promise<UserAnalytic> {
    const userAnalytic = this.userAnalyticsRepository.create(createUserAnalyticDto);
    return this.userAnalyticsRepository.save(userAnalytic);
  }

  async findAll(): Promise<UserAnalytic[]> {
    return this.userAnalyticsRepository.find();
  }

  async findOne(id: number): Promise<UserAnalytic> {
    const userAnalytic = await this.userAnalyticsRepository.findOne(id);
    if (!userAnalytic) {
      throw new NotFoundException('UserAnalytic not found');
    }
    return userAnalytic;
  }

  async update(id: number, updateUserAnalyticDto: Partial<CreateUserAnalyticDto>): Promise<UserAnalytic> {
    await this.userAnalyticsRepository.update(id, updateUserAnalyticDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.userAnalyticsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('UserAnalytic not found');
    }
  }
}
