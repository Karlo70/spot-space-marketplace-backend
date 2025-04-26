import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserActivityService } from './user-activity.service';
import { CreateUserActivityDto } from './dto/create-user-activity.dto';
import { UserActivity } from './entities/user-activity.entity';
import { IResponse } from '../shared/interfaces/response.interface';
import { AuthenticationGuard } from '../shared/guards/authentication.guard';
import { RolesGuard } from '../shared/guards/roles.guard';
import { CurrentUser } from '../shared/decorators/current-user.decorator';
import { ParamIdDto } from '../shared/dtos/paramId.dto';
import { RolesDecorator } from '../shared/guards/roles.decorator';
import { User, UserRole } from '../users/entities/user.entity';

@Controller('user-activity')
export class UserActivityController {
  constructor(private readonly userActivityService: UserActivityService) {}

  @Post()
  async create(@Body() createUserActivityDto: CreateUserActivityDto): Promise<IResponse> {
    const userActivity = await this.userActivityService.create(createUserActivityDto);
    return {
      message: 'UserActivity created successfully',
      details: userActivity,
    };
  }

  @Get()
  @UseGuards(AuthenticationGuard, RolesGuard)
  @RolesDecorator(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  async findAll(@CurrentUser() user: User): Promise<IResponse> {
    const userActivities = await this.userActivityService.findAll();
    return {
      message: 'UserActivities retrieved successfully',
      details: userActivities,
    };
  }

  @Get(':id')
  @UseGuards(AuthenticationGuard, RolesGuard)
  @RolesDecorator(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.ORGANIZATION)
  async findOne(@Param() paramDto: ParamIdDto, @CurrentUser() currentUser: User): Promise<IResponse> {
    const userActivity = await this.userActivityService.findOne(paramDto.id);
    return {
      message: 'UserActivity retrieved successfully',
      details: userActivity,
    };
  }

  @Patch(':id')
  async update(@Param() paramDto: ParamIdDto, @Body() updateUserActivityDto: Partial<CreateUserActivityDto>): Promise<IResponse> {
    const userActivity = await this.userActivityService.update(paramDto.id, updateUserActivityDto);
    return {
      message: 'UserActivity updated successfully',
      details: userActivity,
    };
  }

  @Delete(':id')
  async remove(@Param() paramDto: ParamIdDto): Promise<IResponse> {
    await this.userActivityService.remove(paramDto.id);
    return {
      message: 'UserActivity removed successfully',
    };
  }
}
