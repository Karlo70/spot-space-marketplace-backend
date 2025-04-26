import { Test, TestingModule } from '@nestjs/testing';
import { AdPerformanceController } from './ad-performance.controller';
import { AdPerformanceService } from './ad-performance.service';

describe('AdPerformanceController', () => {
  let controller: AdPerformanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdPerformanceController],
      providers: [AdPerformanceService],
    }).compile();

    controller = module.get<AdPerformanceController>(AdPerformanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
