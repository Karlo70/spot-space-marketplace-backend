import { Module } from '@nestjs/common';
import { AdminDashboardMetricsService } from './admin-dashboard-metrics.service';
import { AdminDashboardMetricsController } from './admin-dashboard-metrics.controller';

@Module({
  controllers: [AdminDashboardMetricsController],
  providers: [AdminDashboardMetricsService],
})
export class AdminDashboardMetricsModule {}
