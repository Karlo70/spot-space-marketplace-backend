import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserGroupMembershipService } from './user-group-membership.service';
import { CreateUserGroupMembershipDto } from './dto/create-user-group-membership.dto';
import { UserGroupMembership } from './entities/user-group-membership.entity';
import { IResponse } from '../shared/interfaces/response.interface';

@Controller('user-group-membership')
export class UserGroupMembershipController {
  constructor(private readonly userGroupMembershipService: UserGroupMembershipService) {}

  @Post()
  async create(@Body() createUserGroupMembershipDto: CreateUserGroupMembershipDto): Promise<IResponse> {
    const userGroupMembership = await this.userGroupMembershipService.create(createUserGroupMembershipDto);
    return {
      message: 'UserGroupMembership created successfully',
      details: userGroupMembership,
    };
  }

  @Get()
  async findAll(): Promise<IResponse> {
    const userGroupMemberships = await this.userGroupMembershipService.findAll();
    return {
      message: 'UserGroupMemberships retrieved successfully',
      details: userGroupMemberships,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IResponse> {
    const userGroupMembership = await this.userGroupMembershipService.findOne(+id);
    return {
      message: 'UserGroupMembership retrieved successfully',
      details: userGroupMembership,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserGroupMembershipDto: Partial<CreateUserGroupMembershipDto>): Promise<IResponse> {
    const userGroupMembership = await this.userGroupMembershipService.update(+id, updateUserGroupMembershipDto);
    return {
      message: 'UserGroupMembership updated successfully',
      details: userGroupMembership,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IResponse> {
    await this.userGroupMembershipService.remove(+id);
    return {
      message: 'UserGroupMembership removed successfully',
    };
  }
}
