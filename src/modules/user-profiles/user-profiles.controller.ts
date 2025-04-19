// src/user-profiles/user-profiles.controller.ts
import { Controller, Get, Post, Patch, Param, Query, Body } from '@nestjs/common';
import { UserProfilesService } from './user-profiles.service';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { ParamIdDto } from 'src/shared/dto/param-id.dto';
import { GetAllUserProfilesDto } from './dto/get-all-user-profiles.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';

@Controller('user-profiles')
export class UserProfilesController {
  constructor(private readonly service: UserProfilesService) {}

  @Post(':userId')
  create(@Param() params: ParamIdDto, @Body() dto: CreateUserProfileDto) {
    return this.service.create(params.id, dto);
  }

  @Get()
  findAll(@Query() query: GetAllUserProfilesDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  findOne(@Param() params: ParamIdDto) {
    return this.service.findById(params.id);
  }

  @Patch(':id')
  update(@Param() params: ParamIdDto, @Body() dto: UpdateUserProfileDto) {
    return this.service.update(params.id, dto);
  }
}
