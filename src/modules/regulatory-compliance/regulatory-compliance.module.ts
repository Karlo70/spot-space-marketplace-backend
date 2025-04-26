import { Module } from '@nestjs/common';
import { RegulatoryComplianceService } from './regulatory-compliance.service';
import { RegulatoryComplianceController } from './regulatory-compliance.controller';

@Module({
  controllers: [RegulatoryComplianceController],
  providers: [RegulatoryComplianceService],
})
export class RegulatoryComplianceModule {}
