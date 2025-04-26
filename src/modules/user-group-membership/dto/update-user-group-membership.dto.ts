import { PartialType } from '@nestjs/mapped-types';
import { CreateUserGroupMembershipDto } from './create-user-group-membership.dto';

export class UpdateUserGroupMembershipDto extends PartialType(CreateUserGroupMembershipDto) {}
