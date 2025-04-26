import { Module } from '@nestjs/common';
import { DataRetentionPolicyService } from './data-retention-policy.service';
import { DataRetentionPolicyController } from './data-retention-policy.controller';

@Module({
  controllers: [DataRetentionPolicyController],
  providers: [DataRetentionPolicyService],
})
export class DataRetentionPolicyModule {}
