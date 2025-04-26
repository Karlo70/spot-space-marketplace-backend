import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { Campaign } from './entities/campaign.entity';
import { IResponse } from '../shared/interfaces/response.interface';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Post()
  async create(@Body() createCampaignDto: CreateCampaignDto): Promise<IResponse> {
    const campaign = await this.campaignsService.create(createCampaignDto);
    return {
      message: 'Campaign created successfully',
      details: campaign,
    };
  }

  @Get()
  async findAll(): Promise<IResponse> {
    const campaigns = await this.campaignsService.findAll();
    return {
      message: 'Campaigns retrieved successfully',
      details: campaigns,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IResponse> {
    const campaign = await this.campaignsService.findOne(+id);
    return {
      message: 'Campaign retrieved successfully',
      details: campaign,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCampaignDto: Partial<CreateCampaignDto>): Promise<IResponse> {
    const campaign = await this.campaignsService.update(+id, updateCampaignDto);
    return {
      message: 'Campaign updated successfully',
      details: campaign,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IResponse> {
    await this.campaignsService.remove(+id);
    return {
      message: 'Campaign removed successfully',
    };
  }
}
