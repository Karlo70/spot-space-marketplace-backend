import { Module } from '@nestjs/common';
import { UserGroupMembershipService } from './user-group-membership.service';
import { UserGroupMembershipController } from './user-group-membership.controller';

@Module({
  controllers: [UserGroupMembershipController],
  providers: [UserGroupMembershipService],
})
export class UserGroupMembershipModule {}
