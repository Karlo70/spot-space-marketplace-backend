import { Test, TestingModule } from '@nestjs/testing';
import { RegulatoryComplianceController } from './regulatory-compliance.controller';
import { RegulatoryComplianceService } from './regulatory-compliance.service';

describe('RegulatoryComplianceController', () => {
  let controller: RegulatoryComplianceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegulatoryComplianceController],
      providers: [RegulatoryComplianceService],
    }).compile();

    controller = module.get<RegulatoryComplianceController>(RegulatoryComplianceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
