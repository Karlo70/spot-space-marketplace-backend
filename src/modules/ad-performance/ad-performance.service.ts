import { Injectable } from '@nestjs/common';
import { CreateAdPerformanceDto } from './dto/create-ad-performance.dto';
import { UpdateAdPerformanceDto } from './dto/update-ad-performance.dto';

@Injectable()
export class AdPerformanceService {
  create(createAdPerformanceDto: CreateAdPerformanceDto) {
    return 'This action adds a new adPerformance';
  }

  findAll() {
    return `This action returns all adPerformance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adPerformance`;
  }

  update(id: number, updateAdPerformanceDto: UpdateAdPerformanceDto) {
    return `This action updates a #${id} adPerformance`;
  }

  remove(id: number) {
    return `This action removes a #${id} adPerformance`;
  }
}
