import { Test, TestingModule } from '@nestjs/testing';
import { RegulatoryComplianceService } from './regulatory-compliance.service';

describe('RegulatoryComplianceService', () => {
  let service: RegulatoryComplianceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegulatoryComplianceService],
    }).compile();

    service = module.get<RegulatoryComplianceService>(RegulatoryComplianceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
