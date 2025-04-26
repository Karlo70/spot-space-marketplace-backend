import { Injectable } from '@nestjs/common';
import { CreateConsentManagementDto } from './dto/create-consent-management.dto';
import { UpdateConsentManagementDto } from './dto/update-consent-management.dto';

@Injectable()
export class ConsentManagementService {
  create(createConsentManagementDto: CreateConsentManagementDto) {
    return 'This action adds a new consentManagement';
  }

  findAll() {
    return `This action returns all consentManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consentManagement`;
  }

  update(id: number, updateConsentManagementDto: UpdateConsentManagementDto) {
    return `This action updates a #${id} consentManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} consentManagement`;
  }
}
