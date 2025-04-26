import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdCreativesService } from './ad-creatives.service';
import { CreateAdCreativeDto } from './dto/create-ad-creative.dto';
import { AdCreative } from './entities/ad-creative.entity';
import { IResponse } from '../shared/interfaces/response.interface';

@Controller('ad-creatives')
export class AdCreativesController {
  constructor(private readonly adCreativesService: AdCreativesService) {}

  @Post()
  async create(@Body() createAdCreativeDto: CreateAdCreativeDto): Promise<IResponse> {
    const adCreative = await this.adCreativesService.create(createAdCreativeDto);
    return {
      message: 'AdCreative created successfully',
      details: adCreative,
    };
  }

  @Get()
  async findAll(): Promise<IResponse> {
    const adCreatives = await this.adCreativesService.findAll();
    return {
      message: 'AdCreatives retrieved successfully',
      details: adCreatives,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IResponse> {
    const adCreative = await this.adCreativesService.findOne(+id);
    return {
      message: 'AdCreative retrieved successfully',
      details: adCreative,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAdCreativeDto: Partial<CreateAdCreativeDto>): Promise<IResponse> {
    const adCreative = await this.adCreativesService.update(+id, updateAdCreativeDto);
    return {
      message: 'AdCreative updated successfully',
      details: adCreative,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IResponse> {
    await this.adCreativesService.remove(+id);
    return {
      message: 'AdCreative removed successfully',
    };
  }
}
