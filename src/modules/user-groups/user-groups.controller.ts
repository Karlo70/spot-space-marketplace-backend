import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserGroupsService } from './user-groups.service';
import { CreateUserGroupDto } from './dto/create-user-group.dto';
import { UserGroup } from './entities/user-group.entity';
import { IResponse } from '../shared/interfaces/response.interface';

@Controller('user-groups')
export class UserGroupsController {
  constructor(private readonly userGroupsService: UserGroupsService) {}

  @Post()
  async create(@Body() createUserGroupDto: CreateUserGroupDto): Promise<IResponse> {
    const userGroup = await this.userGroupsService.create(createUserGroupDto);
    return {
      message: 'UserGroup created successfully',
      details: userGroup,
    };
  }

  @Get()
  async findAll(): Promise<IResponse> {
    const userGroups = await this.userGroupsService.findAll();
    return {
      message: 'UserGroups retrieved successfully',
      details: userGroups,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IResponse> {
    const userGroup = await this.userGroupsService.findOne(+id);
    return {
      message: 'UserGroup retrieved successfully',
      details: userGroup,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserGroupDto: Partial<CreateUserGroupDto>): Promise<IResponse> {
    const userGroup = await this.userGroupsService.update(+id, updateUserGroupDto);
    return {
      message: 'UserGroup updated successfully',
      details: userGroup,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IResponse> {
    await this.userGroupsService.remove(+id);
    return {
      message: 'UserGroup removed successfully',
    };
  }
}
