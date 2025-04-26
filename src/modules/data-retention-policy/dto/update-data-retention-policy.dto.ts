import { PartialType } from '@nestjs/mapped-types';
import { CreateDataRetentionPolicyDto } from './create-data-retention-policy.dto';

export class UpdateDataRetentionPolicyDto extends PartialType(CreateDataRetentionPolicyDto) {}
