import { Module } from '@nestjs/common';
import { UserEngagementService } from './user-engagement.service';
import { UserEngagementController } from './user-engagement.controller';

@Module({
  controllers: [UserEngagementController],
  providers: [UserEngagementService],
})
export class UserEngagementModule {}
