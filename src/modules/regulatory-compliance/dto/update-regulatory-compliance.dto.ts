import { PartialType } from '@nestjs/mapped-types';
import { CreateRegulatoryComplianceDto } from './create-regulatory-compliance.dto';

export class UpdateRegulatoryComplianceDto extends PartialType(CreateRegulatoryComplianceDto) {}
