import { PartialType } from '@nestjs/mapped-types';
import { CreateConsentManagementDto } from './create-consent-management.dto';

export class UpdateConsentManagementDto extends PartialType(CreateConsentManagementDto) {}
