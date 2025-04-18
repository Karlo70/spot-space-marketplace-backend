// src/users/users.controller.ts
import { Controller, Get, Param, Post, Body, Patch, Query, ParseUUIDPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetAllUsersDto } from './dto/get-all-user.dto';
import { ParamIdDto } from '../../shared/dto/param-id.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get()
  findAll(@Query() query: GetAllUsersDto) {
    return this.usersService.listUsers(query);
  }

  @Get(':id')
  findOne(@Param() params: ParamIdDto) {
    return this.usersService.findById(params.id);
  }

  @Patch(':id')
  update(@Param() params: ParamIdDto, @Body() dto: UpdateUserDto) {
    return this.usersService.update(params.id, dto);
  }
}
