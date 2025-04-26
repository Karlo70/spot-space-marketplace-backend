import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserEngagementDto } from './dto/create-user-engagement.dto';
import { UserEngagement } from './entities/user-engagement.entity';

@Injectable()
export class UserEngagementService {
  constructor(
    @InjectRepository(UserEngagement)
    private readonly userEngagementRepository: Repository<UserEngagement>,
  ) {}

  async create(createUserEngagementDto: CreateUserEngagementDto): Promise<UserEngagement> {
    const userEngagement = this.userEngagementRepository.create(createUserEngagementDto);
    return this.userEngagementRepository.save(userEngagement);
  }

  async findAll(): Promise<UserEngagement[]> {
    return this.userEngagementRepository.find();
  }

  async findOne(id: number): Promise<UserEngagement> {
    const userEngagement = await this.userEngagementRepository.findOne(id);
    if (!userEngagement) {
      throw new NotFoundException('UserEngagement not found');
    }
    return userEngagement;
  }

  async update(id: number, updateUserEngagementDto: Partial<CreateUserEngagementDto>): Promise<UserEngagement> {
    await this.userEngagementRepository.update(id, updateUserEngagementDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.userEngagementRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('UserEngagement not found');
    }
  }
}
