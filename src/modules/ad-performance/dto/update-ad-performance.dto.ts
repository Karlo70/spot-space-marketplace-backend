import { PartialType } from '@nestjs/mapped-types';
import { CreateAdPerformanceDto } from './create-ad-performance.dto';

export class UpdateAdPerformanceDto extends PartialType(CreateAdPerformanceDto) {}
