import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FraudDetectionService } from './fraud-detection.service';
import { CreateFraudDetectionDto } from './dto/create-fraud-detection.dto';
import { UpdateFraudDetectionDto } from './dto/update-fraud-detection.dto';

@Controller('fraud-detection')
export class FraudDetectionController {
  constructor(private readonly fraudDetectionService: FraudDetectionService) {}

  @Post()
  create(@Body() createFraudDetectionDto: CreateFraudDetectionDto) {
    return this.fraudDetectionService.create(createFraudDetectionDto);
  }

  @Get()
  findAll() {
    return this.fraudDetectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fraudDetectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFraudDetectionDto: UpdateFraudDetectionDto) {
    return this.fraudDetectionService.update(+id, updateFraudDetectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fraudDetectionService.remove(+id);
  }
}
