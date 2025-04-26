import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserEngagementService } from './user-engagement.service';
import { CreateUserEngagementDto } from './dto/create-user-engagement.dto';
import { UserEngagement } from './entities/user-engagement.entity';
import { IResponse } from '../shared/interfaces/response.interface';

@Controller('user-engagement')
export class UserEngagementController {
  constructor(private readonly userEngagementService: UserEngagementService) {}

  @Post()
  async create(@Body() createUserEngagementDto: CreateUserEngagementDto): Promise<IResponse> {
    const userEngagement = await this.userEngagementService.create(createUserEngagementDto);
    return {
      message: 'UserEngagement created successfully',
      details: userEngagement,
    };
  }

  @Get()
  async findAll(): Promise<IResponse> {
    const userEngagements = await this.userEngagementService.findAll();
    return {
      message: 'UserEngagements retrieved successfully',
      details: userEngagements,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IResponse> {
    const userEngagement = await this.userEngagementService.findOne(+id);
    return {
      message: 'UserEngagement retrieved successfully',
      details: userEngagement,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserEngagementDto: Partial<CreateUserEngagementDto>): Promise<IResponse> {
    const userEngagement = await this.userEngagementService.update(+id, updateUserEngagementDto);
    return {
      message: 'UserEngagement updated successfully',
      details: userEngagement,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IResponse> {
    await this.userEngagementService.remove(+id);
    return {
      message: 'UserEngagement removed successfully',
    };
  }
}
