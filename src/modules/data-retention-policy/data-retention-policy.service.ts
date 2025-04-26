import { Injectable } from '@nestjs/common';
import { CreateDataRetentionPolicyDto } from './dto/create-data-retention-policy.dto';
import { UpdateDataRetentionPolicyDto } from './dto/update-data-retention-policy.dto';

@Injectable()
export class DataRetentionPolicyService {
  create(createDataRetentionPolicyDto: CreateDataRetentionPolicyDto) {
    return 'This action adds a new dataRetentionPolicy';
  }

  findAll() {
    return `This action returns all dataRetentionPolicy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dataRetentionPolicy`;
  }

  update(id: number, updateDataRetentionPolicyDto: UpdateDataRetentionPolicyDto) {
    return `This action updates a #${id} dataRetentionPolicy`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataRetentionPolicy`;
  }
}
