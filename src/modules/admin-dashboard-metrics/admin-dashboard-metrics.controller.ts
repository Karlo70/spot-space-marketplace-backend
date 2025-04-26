import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminDashboardMetricsService } from './admin-dashboard-metrics.service';
import { CreateAdminDashboardMetricDto } from './dto/create-admin-dashboard-metric.dto';
import { UpdateAdminDashboardMetricDto } from './dto/update-admin-dashboard-metric.dto';

@Controller('admin-dashboard-metrics')
export class AdminDashboardMetricsController {
  constructor(private readonly adminDashboardMetricsService: AdminDashboardMetricsService) {}

  @Post()
  create(@Body() createAdminDashboardMetricDto: CreateAdminDashboardMetricDto) {
    return this.adminDashboardMetricsService.create(createAdminDashboardMetricDto);
  }

  @Get()
  findAll() {
    return this.adminDashboardMetricsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminDashboardMetricsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDashboardMetricDto: UpdateAdminDashboardMetricDto) {
    return this.adminDashboardMetricsService.update(+id, updateAdminDashboardMetricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminDashboardMetricsService.remove(+id);
  }
}
