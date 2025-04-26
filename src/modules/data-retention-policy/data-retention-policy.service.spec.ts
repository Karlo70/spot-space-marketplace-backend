import { Test, TestingModule } from '@nestjs/testing';
import { DataRetentionPolicyService } from './data-retention-policy.service';

describe('DataRetentionPolicyService', () => {
  let service: DataRetentionPolicyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataRetentionPolicyService],
    }).compile();

    service = module.get<DataRetentionPolicyService>(DataRetentionPolicyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
