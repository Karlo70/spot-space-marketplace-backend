import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TargetAudiencesService } from './target-audiences.service';
import { CreateTargetAudienceDto } from './dto/create-target-audience.dto';
import { UpdateTargetAudienceDto } from './dto/update-target-audience.dto';

@Controller('target-audiences')
export class TargetAudiencesController {
  constructor(private readonly targetAudiencesService: TargetAudiencesService) {}

  @Post()
  create(@Body() createTargetAudienceDto: CreateTargetAudienceDto) {
    return this.targetAudiencesService.create(createTargetAudienceDto);
  }

  @Get()
  findAll() {
    return this.targetAudiencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.targetAudiencesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTargetAudienceDto: UpdateTargetAudienceDto) {
    return this.targetAudiencesService.update(+id, updateTargetAudienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.targetAudiencesService.remove(+id);
  }
}
