import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdSpacesService } from './ad-spaces.service';
import { CreateAdSpaceDto } from './dto/create-ad-space.dto';
import { AdSpace } from './entities/ad-space.entity';
import { IResponse } from '../shared/interfaces/response.interface';

@Controller('ad-spaces')
export class AdSpacesController {
  constructor(private readonly adSpacesService: AdSpacesService) {}

  @Post()
  async create(@Body() createAdSpaceDto: CreateAdSpaceDto): Promise<IResponse> {
    const adSpace = await this.adSpacesService.create(createAdSpaceDto);
    return {
      message: 'AdSpace created successfully',
      details: adSpace,
    };
  }

  @Get()
  async findAll(): Promise<IResponse> {
    const adSpaces = await this.adSpacesService.findAll();
    return {
      message: 'AdSpaces retrieved successfully',
      details: adSpaces,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IResponse> {
    const adSpace = await this.adSpacesService.findOne(+id);
    return {
      message: 'AdSpace retrieved successfully',
      details: adSpace,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAdSpaceDto: Partial<CreateAdSpaceDto>): Promise<IResponse> {
    const adSpace = await this.adSpacesService.update(+id, updateAdSpaceDto);
    return {
      message: 'AdSpace updated successfully',
      details: adSpace,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IResponse> {
    await this.adSpacesService.remove(+id);
    return {
      message: 'AdSpace removed successfully',
    };
  }
}
