import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserGroupDto } from './dto/create-user-group.dto';
import { UserGroup } from './entities/user-group.entity';

@Injectable()
export class UserGroupsService {
  constructor(
    @InjectRepository(UserGroup)
    private readonly userGroupsRepository: Repository<UserGroup>,
  ) {}

  async create(createUserGroupDto: CreateUserGroupDto): Promise<UserGroup> {
    const userGroup = this.userGroupsRepository.create(createUserGroupDto);
    return this.userGroupsRepository.save(userGroup);
  }

  async findAll(): Promise<UserGroup[]> {
    return this.userGroupsRepository.find();
  }

  async findOne(id: number): Promise<UserGroup> {
    const userGroup = await this.userGroupsRepository.findOne(id);
    if (!userGroup) {
      throw new NotFoundException('UserGroup not found');
    }
    return userGroup;
  }

  async update(id: number, updateUserGroupDto: Partial<CreateUserGroupDto>): Promise<UserGroup> {
    await this.userGroupsRepository.update(id, updateUserGroupDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.userGroupsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('UserGroup not found');
    }
  }
}
