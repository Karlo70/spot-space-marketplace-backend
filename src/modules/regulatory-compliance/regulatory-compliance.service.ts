import { Injectable } from '@nestjs/common';
import { CreateRegulatoryComplianceDto } from './dto/create-regulatory-compliance.dto';
import { UpdateRegulatoryComplianceDto } from './dto/update-regulatory-compliance.dto';

@Injectable()
export class RegulatoryComplianceService {
  create(createRegulatoryComplianceDto: CreateRegulatoryComplianceDto) {
    return 'This action adds a new regulatoryCompliance';
  }

  findAll() {
    return `This action returns all regulatoryCompliance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} regulatoryCompliance`;
  }

  update(id: number, updateRegulatoryComplianceDto: UpdateRegulatoryComplianceDto) {
    return `This action updates a #${id} regulatoryCompliance`;
  }

  remove(id: number) {
    return `This action removes a #${id} regulatoryCompliance`;
  }
}
