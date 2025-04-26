import { Injectable } from '@nestjs/common';
import { CreateAdminDashboardMetricDto } from './dto/create-admin-dashboard-metric.dto';
import { UpdateAdminDashboardMetricDto } from './dto/update-admin-dashboard-metric.dto';

@Injectable()
export class AdminDashboardMetricsService {
  create(createAdminDashboardMetricDto: CreateAdminDashboardMetricDto) {
    return 'This action adds a new adminDashboardMetric';
  }

  findAll() {
    return `This action returns all adminDashboardMetrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminDashboardMetric`;
  }

  update(id: number, updateAdminDashboardMetricDto: UpdateAdminDashboardMetricDto) {
    return `This action updates a #${id} adminDashboardMetric`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminDashboardMetric`;
  }
}
