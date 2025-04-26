import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserGroupMembershipDto } from './dto/create-user-group-membership.dto';
import { UserGroupMembership } from './entities/user-group-membership.entity';

@Injectable()
export class UserGroupMembershipService {
  constructor(
    @InjectRepository(UserGroupMembership)
    private readonly userGroupMembershipRepository: Repository<UserGroupMembership>,
  ) {}

  async create(createUserGroupMembershipDto: CreateUserGroupMembershipDto): Promise<UserGroupMembership> {
    const userGroupMembership = this.userGroupMembershipRepository.create(createUserGroupMembershipDto);
    return this.userGroupMembershipRepository.save(userGroupMembership);
  }

  async findAll(): Promise<UserGroupMembership[]> {
    return this.userGroupMembershipRepository.find();
  }

  async findOne(id: number): Promise<UserGroupMembership> {
    const userGroupMembership = await this.userGroupMembershipRepository.findOne(id);
    if (!userGroupMembership) {
      throw new NotFoundException('UserGroupMembership not found');
    }
    return userGroupMembership;
  }

  async update(id: number, updateUserGroupMembershipDto: Partial<CreateUserGroupMembershipDto>): Promise<UserGroupMembership> {
    await this.userGroupMembershipRepository.update(id, updateUserGroupMembershipDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.userGroupMembershipRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('UserGroupMembership not found');
    }
  }
}
