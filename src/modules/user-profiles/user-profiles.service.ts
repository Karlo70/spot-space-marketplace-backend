import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UserProfile } from './entities/user-profile.entity';

@Injectable()
export class UserProfilesService {
  constructor(
    @InjectRepository(UserProfile)
    private readonly userProfilesRepository: Repository<UserProfile>,
  ) {}

  async create(createUserProfileDto: CreateUserProfileDto): Promise<UserProfile> {
    const userProfile = this.userProfilesRepository.create(createUserProfileDto);
    return this.userProfilesRepository.save(userProfile);
  }

  async findAll(): Promise<UserProfile[]> {
    return this.userProfilesRepository.find();
  }

  async findOne(id: number): Promise<UserProfile> {
    const userProfile = await this.userProfilesRepository.findOne(id);
    if (!userProfile) {
      throw new NotFoundException('UserProfile not found');
    }
    return userProfile;
  }

  async update(id: number, updateUserProfileDto: Partial<CreateUserProfileDto>): Promise<UserProfile> {
    await this.userProfilesRepository.update(id, updateUserProfileDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.userProfilesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('UserProfile not found');
    }
  }
}
