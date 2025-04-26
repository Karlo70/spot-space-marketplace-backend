import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DataRetentionPolicyService } from './data-retention-policy.service';
import { CreateDataRetentionPolicyDto } from './dto/create-data-retention-policy.dto';
import { UpdateDataRetentionPolicyDto } from './dto/update-data-retention-policy.dto';

@Controller('data-retention-policy')
export class DataRetentionPolicyController {
  constructor(private readonly dataRetentionPolicyService: DataRetentionPolicyService) {}

  @Post()
  create(@Body() createDataRetentionPolicyDto: CreateDataRetentionPolicyDto) {
    return this.dataRetentionPolicyService.create(createDataRetentionPolicyDto);
  }

  @Get()
  findAll() {
    return this.dataRetentionPolicyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataRetentionPolicyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDataRetentionPolicyDto: UpdateDataRetentionPolicyDto) {
    return this.dataRetentionPolicyService.update(+id, updateDataRetentionPolicyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataRetentionPolicyService.remove(+id);
  }
}
