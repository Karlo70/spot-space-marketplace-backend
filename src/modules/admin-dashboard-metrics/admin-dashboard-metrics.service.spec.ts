import { Test, TestingModule } from '@nestjs/testing';
import { AdminDashboardMetricsService } from './admin-dashboard-metrics.service';

describe('AdminDashboardMetricsService', () => {
  let service: AdminDashboardMetricsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminDashboardMetricsService],
    }).compile();

    service = module.get<AdminDashboardMetricsService>(AdminDashboardMetricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
