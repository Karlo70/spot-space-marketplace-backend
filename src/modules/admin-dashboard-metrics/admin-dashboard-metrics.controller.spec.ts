import { Test, TestingModule } from '@nestjs/testing';
import { AdminDashboardMetricsController } from './admin-dashboard-metrics.controller';
import { AdminDashboardMetricsService } from './admin-dashboard-metrics.service';

describe('AdminDashboardMetricsController', () => {
  let controller: AdminDashboardMetricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminDashboardMetricsController],
      providers: [AdminDashboardMetricsService],
    }).compile();

    controller = module.get<AdminDashboardMetricsController>(AdminDashboardMetricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
