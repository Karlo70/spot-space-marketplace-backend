import { PartialType } from '@nestjs/mapped-types';
import { CreateAdSpaceDto } from './create-ad-space.dto';

export class UpdateAdSpaceDto extends PartialType(CreateAdSpaceDto) {}
