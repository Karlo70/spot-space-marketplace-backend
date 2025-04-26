import { PartialType } from '@nestjs/mapped-types';
import { CreateFraudDetectionDto } from './create-fraud-detection.dto';

export class UpdateFraudDetectionDto extends PartialType(CreateFraudDetectionDto) {}
