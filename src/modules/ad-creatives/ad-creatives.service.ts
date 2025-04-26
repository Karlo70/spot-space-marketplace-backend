import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdCreativeDto } from './dto/create-ad-creative.dto';
import { AdCreative } from './entities/ad-creative.entity';

@Injectable()
export class AdCreativesService {
  constructor(
    @InjectRepository(AdCreative)
    private readonly adCreativesRepository: Repository<AdCreative>,
  ) {}

  async create(createAdCreativeDto: CreateAdCreativeDto): Promise<AdCreative> {
    const adCreative = this.adCreativesRepository.create(createAdCreativeDto);
    return this.adCreativesRepository.save(adCreative);
  }

  async findAll(): Promise<AdCreative[]> {
    return this.adCreativesRepository.find();
  }

  async findOne(id: number): Promise<AdCreative> {
    const adCreative = await this.adCreativesRepository.findOne(id);
    if (!adCreative) {
      throw new NotFoundException('AdCreative not found');
    }
    return adCreative;
  }

  async update(id: number, updateAdCreativeDto: Partial<CreateAdCreativeDto>): Promise<AdCreative> {
    await this.adCreativesRepository.update(id, updateAdCreativeDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.adCreativesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('AdCreative not found');
    }
  }
}
