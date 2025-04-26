import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdSpaceDto } from './dto/create-ad-space.dto';
import { AdSpace } from './entities/ad-space.entity';

@Injectable()
export class AdSpacesService {
  constructor(
    @InjectRepository(AdSpace)
    private readonly adSpacesRepository: Repository<AdSpace>,
  ) {}

  async create(createAdSpaceDto: CreateAdSpaceDto): Promise<AdSpace> {
    const adSpace = this.adSpacesRepository.create(createAdSpaceDto);
    return this.adSpacesRepository.save(adSpace);
  }

  async findAll(): Promise<AdSpace[]> {
    return this.adSpacesRepository.find();
  }

  async findOne(id: number): Promise<AdSpace> {
    const adSpace = await this.adSpacesRepository.findOne(id);
    if (!adSpace) {
      throw new NotFoundException('AdSpace not found');
    }
    return adSpace;
  }

  async update(id: number, updateAdSpaceDto: Partial<CreateAdSpaceDto>): Promise<AdSpace> {
    await this.adSpacesRepository.update(id, updateAdSpaceDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.adSpacesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('AdSpace not found');
    }
  }
}
