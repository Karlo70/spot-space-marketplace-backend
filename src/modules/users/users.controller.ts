import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserRole } from './entities/user.entity';
import { IResponse } from '../shared/interfaces/response.interface';
import { AuthenticationGuard } from '../shared/guards/authentication.guard';
import { RolesGuard } from '../shared/guards/roles.guard';
import { RolesDecorator } from '../shared/decorators/roles.decorator';
import { CurrentUser } from '../shared/decorators/current-user.decorator';
import { ParamIdDto } from '../shared/dtos/paramId.dto';
import { GetAllUserDto } from './dto/get-all-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(AuthenticationGuard)
  async create(
    @Body() createUserDto: CreateUserDto,
    @CurrentUser() CurrentUser: User,
  ): Promise<IResponse> {
    const user = await this.usersService.create(createUserDto, CurrentUser);
    return {
      message: 'User created successfully',
      details: user,
    };
  }

  @Get()
  @UseGuards(AuthenticationGuard, RolesGuard)
  @RolesDecorator(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  async findAll(
    @CurrentUser() user: User,
    @Query() getAllDto: GetAllUserDto,
  ): Promise<IResponse> {
    const users = await this.usersService.findAll(user, getAllDto);
    return {
      message: 'Users retrieved successfully',
      details: users,
    };
  }

  @Get(':id')
  @UseGuards(AuthenticationGuard, RolesGuard)
  @RolesDecorator(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  async findOne(
    @Param() paramDto: ParamIdDto,
    @CurrentUser() currentUser: User,
  ): Promise<IResponse> {
    const user = await this.usersService.findOne(paramDto, currentUser);
    return {
      message: 'User retrieved successfully',
      details: user,
    };
  }

  @Patch(':id')
  async update(
    @Param() paramDto: ParamIdDto,
    @Body() updateUserDto: Partial<CreateUserDto>,
    @CurrentUser() currentUser: User,
  ): Promise<IResponse> {
    const user = await this.usersService.update(
      paramDto,
      updateUserDto,
      currentUser,
    );
    return {
      message: 'User updated successfully',
      details: user,
    };
  }

  @Delete(':id')
  async remove(
    @Param() paramDto: ParamIdDto,
    @CurrentUser() currentUser: User,
  ): Promise<IResponse> {
    await this.usersService.remove(currentUser);
    return {
      message: 'User removed successfully',
    };
  }
}
