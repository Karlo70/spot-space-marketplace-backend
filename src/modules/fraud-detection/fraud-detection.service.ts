import { Injectable } from '@nestjs/common';
import { CreateFraudDetectionDto } from './dto/create-fraud-detection.dto';
import { UpdateFraudDetectionDto } from './dto/update-fraud-detection.dto';

@Injectable()
export class FraudDetectionService {
  create(createFraudDetectionDto: CreateFraudDetectionDto) {
    return 'This action adds a new fraudDetection';
  }

  findAll() {
    return `This action returns all fraudDetection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fraudDetection`;
  }

  update(id: number, updateFraudDetectionDto: UpdateFraudDetectionDto) {
    return `This action updates a #${id} fraudDetection`;
  }

  remove(id: number) {
    return `This action removes a #${id} fraudDetection`;
  }
}
