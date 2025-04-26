import { Test, TestingModule } from '@nestjs/testing';
import { DataRetentionPolicyController } from './data-retention-policy.controller';
import { DataRetentionPolicyService } from './data-retention-policy.service';

describe('DataRetentionPolicyController', () => {
  let controller: DataRetentionPolicyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataRetentionPolicyController],
      providers: [DataRetentionPolicyService],
    }).compile();

    controller = module.get<DataRetentionPolicyController>(DataRetentionPolicyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
