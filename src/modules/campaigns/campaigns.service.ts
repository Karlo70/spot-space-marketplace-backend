import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { Campaign } from './entities/campaign.entity';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignsRepository: Repository<Campaign>,
  ) {}

  async create(createCampaignDto: CreateCampaignDto): Promise<Campaign> {
    const campaign = this.campaignsRepository.create(createCampaignDto);
    return this.campaignsRepository.save(campaign);
  }

  async findAll(): Promise<Campaign[]> {
    return this.campaignsRepository.find();
  }

  async findOne(id: number): Promise<Campaign> {
    const campaign = await this.campaignsRepository.findOne(id);
    if (!campaign) {
      throw new NotFoundException('Campaign not found');
    }
    return campaign;
  }

  async update(id: number, updateCampaignDto: Partial<CreateCampaignDto>): Promise<Campaign> {
    await this.campaignsRepository.update(id, updateCampaignDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.campaignsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Campaign not found');
    }
  }
}
