import { Module } from '@nestjs/common';
import { ConsentManagementService } from './consent-management.service';
import { ConsentManagementController } from './consent-management.controller';

@Module({
  controllers: [ConsentManagementController],
  providers: [ConsentManagementService],
})
export class ConsentManagementModule {}
