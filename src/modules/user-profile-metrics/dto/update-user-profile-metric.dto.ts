import { PartialType } from '@nestjs/mapped-types';
import { CreateUserProfileMetricDto } from './create-user-profile-metric.dto';

export class UpdateUserProfileMetricDto extends PartialType(CreateUserProfileMetricDto) {}
