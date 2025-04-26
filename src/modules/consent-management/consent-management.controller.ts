import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsentManagementService } from './consent-management.service';
import { CreateConsentManagementDto } from './dto/create-consent-management.dto';
import { UpdateConsentManagementDto } from './dto/update-consent-management.dto';

@Controller('consent-management')
export class ConsentManagementController {
  constructor(private readonly consentManagementService: ConsentManagementService) {}

  @Post()
  create(@Body() createConsentManagementDto: CreateConsentManagementDto) {
    return this.consentManagementService.create(createConsentManagementDto);
  }

  @Get()
  findAll() {
    return this.consentManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consentManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsentManagementDto: UpdateConsentManagementDto) {
    return this.consentManagementService.update(+id, updateConsentManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consentManagementService.remove(+id);
  }
}
