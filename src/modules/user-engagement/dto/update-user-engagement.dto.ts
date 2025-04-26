import { PartialType } from '@nestjs/mapped-types';
import { CreateUserEngagementDto } from './create-user-engagement.dto';

export class UpdateUserEngagementDto extends PartialType(CreateUserEngagementDto) {}
