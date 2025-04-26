import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UserPreference } from './entities/user-preference.entity';

@Injectable()
export class UserPreferencesService {
  constructor(
    @InjectRepository(UserPreference)
    private readonly userPreferencesRepository: Repository<UserPreference>,
  ) {}

  async create(createUserPreferenceDto: CreateUserPreferenceDto): Promise<UserPreference> {
    const userPreference = this.userPreferencesRepository.create(createUserPreferenceDto);
    return this.userPreferencesRepository.save(userPreference);
  }

  async findAll(): Promise<UserPreference[]> {
    return this.userPreferencesRepository.find();
  }

  async findOne(id: number): Promise<UserPreference> {
    const userPreference = await this.userPreferencesRepository.findOne(id);
    if (!userPreference) {
      throw new NotFoundException('UserPreference not found');
    }
    return userPreference;
  }

  async update(id: number, updateUserPreferenceDto: Partial<CreateUserPreferenceDto>): Promise<UserPreference> {
    await this.userPreferencesRepository.update(id, updateUserPreferenceDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.userPreferencesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('UserPreference not found');
    }
  }
}
