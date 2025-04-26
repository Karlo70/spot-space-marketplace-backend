import { PartialType } from '@nestjs/mapped-types';
import { CreateAccessControlListDto } from './create-access-control-list.dto';

export class UpdateAccessControlListDto extends PartialType(CreateAccessControlListDto) {}
