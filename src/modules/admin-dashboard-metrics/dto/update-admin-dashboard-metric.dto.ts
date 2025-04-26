import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDashboardMetricDto } from './create-admin-dashboard-metric.dto';

export class UpdateAdminDashboardMetricDto extends PartialType(CreateAdminDashboardMetricDto) {}
