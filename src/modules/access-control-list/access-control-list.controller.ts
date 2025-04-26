import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccessControlListService } from './access-control-list.service';
import { CreateAccessControlListDto } from './dto/create-access-control-list.dto';
import { UpdateAccessControlListDto } from './dto/update-access-control-list.dto';

@Controller('access-control-list')
export class AccessControlListController {
  constructor(private readonly accessControlListService: AccessControlListService) {}

  @Post()
  create(@Body() createAccessControlListDto: CreateAccessControlListDto) {
    return this.accessControlListService.create(createAccessControlListDto);
  }

  @Get()
  findAll() {
    return this.accessControlListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accessControlListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccessControlListDto: UpdateAccessControlListDto) {
    return this.accessControlListService.update(+id, updateAccessControlListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessControlListService.remove(+id);
  }
}
