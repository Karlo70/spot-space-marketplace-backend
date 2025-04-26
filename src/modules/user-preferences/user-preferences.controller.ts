import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserPreferencesService } from './user-preferences.service';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UserPreference } from './entities/user-preference.entity';
import { IResponse } from '../shared/interfaces/response.interface';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { RolesGuard } from 'src/shared/guards/roles.guard';
import { RolesDecorator } from 'src/shared/decorators/roles.decorator';
import { UserRole } from 'src/modules/users/entities/user-role.entity';
import { CurrentUser } from 'src/shared/decorators/current-user.decorator';
import { ParamIdDto } from 'src/shared/dto/param-id.dto';

@Controller('user-preferences')
export class UserPreferencesController {
  constructor(private readonly userPreferencesService: UserPreferencesService) {}

  @Post()
  async create(@Body() createUserPreferenceDto: CreateUserPreferenceDto): Promise<IResponse> {
    const userPreference = await this.userPreferencesService.create(createUserPreferenceDto);
    return {
      message: 'UserPreference created successfully',
      details: userPreference,
    };
  }

  @Get()
  @UseGuards(AuthenticationGuard, RolesGuard)
  @RolesDecorator(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  async findAll(@CurrentUser() user: User): Promise<IResponse> {
    const userPreferences = await this.userPreferencesService.findAll();
    return {
      message: 'UserPreferences retrieved successfully',
      details: userPreferences,
    };
  }

  @Get(':id')
  @UseGuards(AuthenticationGuard, RolesGuard)
  @RolesDecorator(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.ORGANIZATION)
  async findOne(@Param() paramDto: ParamIdDto, @CurrentUser() currentUser: User): Promise<IResponse> {
    const userPreference = await this.userPreferencesService.findOne(paramDto.id);
    return {
      message: 'UserPreference retrieved successfully',
      details: userPreference,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserPreferenceDto: Partial<CreateUserPreferenceDto>): Promise<IResponse> {
    const userPreference = await this.userPreferencesService.update(+id, updateUserPreferenceDto);
    return {
      message: 'UserPreference updated successfully',
      details: userPreference,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IResponse> {
    await this.userPreferencesService.remove(+id);
    return {
      message: 'UserPreference removed successfully',
    };
  }
}
