import { Module } from '@nestjs/common';
import { UserAnalyticsService } from './user-analytics.service';
import { UserAnalyticsController } from './user-analytics.controller';

@Module({
  controllers: [UserAnalyticsController],
  providers: [UserAnalyticsService],
})
export class UserAnalyticsModule {}
