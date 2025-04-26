import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserRole } from './entities/user.entity';
import { IResponse } from '../shared/interfaces/response.interface';
import { AuthenticationGuard } from '../shared/guards/authentication.guard';
import { RolesGuard } from '../shared/guards/roles.guard';
import { RolesDecorator } from '../shared/decorators/roles.decorator';
import { CurrentUser } from '../shared/decorators/current-user.decorator';
import { ParamIdDto } from '../shared/dtos/paramId.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<IResponse> {
    const user = await this.usersService.create(createUserDto);
    return {
      message: 'User created successfully',
      details: user,
    };
  }

  @Get()
  @UseGuards(AuthenticationGuard, RolesGuard)
  @RolesDecorator(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  async findAll(@CurrentUser() user: User): Promise<IResponse> {
    const users = await this.usersService.findAll();
    return {
      message: 'Users retrieved successfully',
      details: users,
    };
  }

  @Get(':id')
  @UseGuards(AuthenticationGuard, RolesGuard)
  @RolesDecorator(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  async findOne(@Param() paramDto: ParamIdDto, @CurrentUser() currentUser: User): Promise<IResponse> {
    const user = await this.usersService.findOne(paramDto.id);
    return {
      message: 'User retrieved successfully',
      details: user,
    };
  }

  @Patch(':id')
  async update(@Param() paramDto: ParamIdDto, @Body() updateUserDto: Partial<CreateUserDto>): Promise<IResponse> {
    const user = await this.usersService.update(paramDto.id, updateUserDto);
    return {
      message: 'User updated successfully',
      details: user,
    };
  }

  @Delete(':id')
  async remove(@Param() paramDto: ParamIdDto): Promise<IResponse> {
    await this.usersService.remove(paramDto.id);
    return {
      message: 'User removed successfully',
    };
  }
}
