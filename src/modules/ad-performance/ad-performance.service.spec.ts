import { Test, TestingModule } from '@nestjs/testing';
import { AdPerformanceService } from './ad-performance.service';

describe('AdPerformanceService', () => {
  let service: AdPerformanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdPerformanceService],
    }).compile();

    service = module.get<AdPerformanceService>(AdPerformanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
