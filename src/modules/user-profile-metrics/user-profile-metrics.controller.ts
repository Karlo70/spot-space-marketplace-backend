import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserProfileMetricsService } from './user-profile-metrics.service';
import { CreateUserProfileMetricDto } from './dto/create-user-profile-metric.dto';
import { UserProfileMetric } from './entities/user-profile-metric.entity';
import { IResponse } from '../shared/interfaces/response.interface';

@Controller('user-profile-metrics')
export class UserProfileMetricsController {
  constructor(private readonly userProfileMetricsService: UserProfileMetricsService) {}

  @Post()
  async create(@Body() createUserProfileMetricDto: CreateUserProfileMetricDto): Promise<IResponse> {
    const userProfileMetric = await this.userProfileMetricsService.create(createUserProfileMetricDto);
    return {
      message: 'UserProfileMetric created successfully',
      details: userProfileMetric,
    };
  }

  @Get()
  async findAll(): Promise<IResponse> {
    const userProfileMetrics = await this.userProfileMetricsService.findAll();
    return {
      message: 'UserProfileMetrics retrieved successfully',
      details: userProfileMetrics,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IResponse> {
    const userProfileMetric = await this.userProfileMetricsService.findOne(+id);
    return {
      message: 'UserProfileMetric retrieved successfully',
      details: userProfileMetric,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserProfileMetricDto: Partial<CreateUserProfileMetricDto>): Promise<IResponse> {
    const userProfileMetric = await this.userProfileMetricsService.update(+id, updateUserProfileMetricDto);
    return {
      message: 'UserProfileMetric updated successfully',
      details: userProfileMetric,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IResponse> {
    await this.userProfileMetricsService.remove(+id);
    return {
      message: 'UserProfileMetric removed successfully',
    };
  }
}
