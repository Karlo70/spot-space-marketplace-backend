import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAnalyticsService } from './user-analytics.service';
import { CreateUserAnalyticDto } from './dto/create-user-analytic.dto';
import { UserAnalytic } from './entities/user-analytic.entity';
import { IResponse } from '../shared/interfaces/response.interface';

@Controller('user-analytics')
export class UserAnalyticsController {
  constructor(private readonly userAnalyticsService: UserAnalyticsService) {}

  @Post()
  async create(@Body() createUserAnalyticDto: CreateUserAnalyticDto): Promise<IResponse> {
    const userAnalytic = await this.userAnalyticsService.create(createUserAnalyticDto);
    return {
      message: 'UserAnalytic created successfully',
      details: userAnalytic,
    };
  }

  @Get()
  async findAll(): Promise<IResponse> {
    const userAnalytics = await this.userAnalyticsService.findAll();
    return {
      message: 'UserAnalytics retrieved successfully',
      details: userAnalytics,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IResponse> {
    const userAnalytic = await this.userAnalyticsService.findOne(+id);
    return {
      message: 'UserAnalytic retrieved successfully',
      details: userAnalytic,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserAnalyticDto: Partial<CreateUserAnalyticDto>): Promise<IResponse> {
    const userAnalytic = await this.userAnalyticsService.update(+id, updateUserAnalyticDto);
    return {
      message: 'UserAnalytic updated successfully',
      details: userAnalytic,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IResponse> {
    await this.userAnalyticsService.remove(+id);
    return {
      message: 'UserAnalytic removed successfully',
    };
  }
}
