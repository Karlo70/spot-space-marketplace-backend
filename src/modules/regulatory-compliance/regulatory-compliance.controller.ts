import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegulatoryComplianceService } from './regulatory-compliance.service';
import { CreateRegulatoryComplianceDto } from './dto/create-regulatory-compliance.dto';
import { UpdateRegulatoryComplianceDto } from './dto/update-regulatory-compliance.dto';

@Controller('regulatory-compliance')
export class RegulatoryComplianceController {
  constructor(private readonly regulatoryComplianceService: RegulatoryComplianceService) {}

  @Post()
  create(@Body() createRegulatoryComplianceDto: CreateRegulatoryComplianceDto) {
    return this.regulatoryComplianceService.create(createRegulatoryComplianceDto);
  }

  @Get()
  findAll() {
    return this.regulatoryComplianceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regulatoryComplianceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegulatoryComplianceDto: UpdateRegulatoryComplianceDto) {
    return this.regulatoryComplianceService.update(+id, updateRegulatoryComplianceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regulatoryComplianceService.remove(+id);
  }
}
