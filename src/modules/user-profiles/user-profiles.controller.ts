import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserProfilesService } from './user-profiles.service';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UserProfile } from './entities/user-profile.entity';
import { IResponse } from '../shared/interfaces/response.interface';

@Controller('user-profiles')
export class UserProfilesController {
  constructor(private readonly userProfilesService: UserProfilesService) {}

  @Post()
  async create(@Body() createUserProfileDto: CreateUserProfileDto): Promise<IResponse> {
    const userProfile = await this.userProfilesService.create(createUserProfileDto);
    return {
      message: 'UserProfile created successfully',
      details: userProfile,
    };
  }

  @Get()
  async findAll(): Promise<IResponse> {
    const userProfiles = await this.userProfilesService.findAll();
    return {
      message: 'UserProfiles retrieved successfully',
      details: userProfiles,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IResponse> {
    const userProfile = await this.userProfilesService.findOne(+id);
    return {
      message: 'UserProfile retrieved successfully',
      details: userProfile,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserProfileDto: Partial<CreateUserProfileDto>): Promise<IResponse> {
    const userProfile = await this.userProfilesService.update(+id, updateUserProfileDto);
    return {
      message: 'UserProfile updated successfully',
      details: userProfile,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IResponse> {
    await this.userProfilesService.remove(+id);
    return {
      message: 'UserProfile removed successfully',
    };
  }
}
