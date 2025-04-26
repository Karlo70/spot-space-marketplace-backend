import { Module } from '@nestjs/common';
import { UserProfileMetricsService } from './user-profile-metrics.service';
import { UserProfileMetricsController } from './user-profile-metrics.controller';

@Module({
  controllers: [UserProfileMetricsController],
  providers: [UserProfileMetricsService],
})
export class UserProfileMetricsModule {}
