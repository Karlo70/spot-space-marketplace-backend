import { Module } from '@nestjs/common';
import { AdPerformanceService } from './ad-performance.service';
import { AdPerformanceController } from './ad-performance.controller';

@Module({
  controllers: [AdPerformanceController],
  providers: [AdPerformanceService],
})
export class AdPerformanceModule {}
