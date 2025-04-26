import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdPerformanceService } from './ad-performance.service';
import { CreateAdPerformanceDto } from './dto/create-ad-performance.dto';
import { UpdateAdPerformanceDto } from './dto/update-ad-performance.dto';

@Controller('ad-performance')
export class AdPerformanceController {
  constructor(private readonly adPerformanceService: AdPerformanceService) {}

  @Post()
  create(@Body() createAdPerformanceDto: CreateAdPerformanceDto) {
    return this.adPerformanceService.create(createAdPerformanceDto);
  }

  @Get()
  findAll() {
    return this.adPerformanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adPerformanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdPerformanceDto: UpdateAdPerformanceDto) {
    return this.adPerformanceService.update(+id, updateAdPerformanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adPerformanceService.remove(+id);
  }
}
