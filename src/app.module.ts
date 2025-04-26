import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataRetentionPolicyModule } from './modules/data-retention-policy/data-retention-policy.module';
import { AccessControlListModule } from './modules/access-control-list/access-control-list.module';
import { ConsentManagementModule } from './modules/consent-management/consent-management.module';
import { RegulatoryComplianceModule } from './modules/regulatory-compliance/regulatory-compliance.module';
import { FraudDetectionModule } from './modules/fraud-detection/fraud-detection.module';
import { AuditLogsModule } from './modules/audit-logs/audit-logs.module';
import { AdminDashboardMetricsModule } from './modules/admin-dashboard-metrics/admin-dashboard-metrics.module';
import { TargetAudiencesModule } from './modules/target-audiences/target-audiences.module';
import { AdPerformanceModule } from './modules/ad-performance/ad-performance.module';
import { CampaignsModule } from './modules/campaigns/campaigns.module';
import { AdCreativesModule } from './modules/ad-creatives/ad-creatives.module';
import { AdSpacesModule } from './modules/ad-spaces/ad-spaces.module';
import { UserProfileMetricsModule } from './modules/user-profile-metrics/user-profile-metrics.module';
import { UserGroupMembershipModule } from './modules/user-group-membership/user-group-membership.module';
import { UserGroupsModule } from './modules/user-groups/user-groups.module';
import { UserEngagementModule } from './modules/user-engagement/user-engagement.module';
import { UserAnalyticsModule } from './modules/user-analytics/user-analytics.module';
import { UserActivityModule } from './modules/user-activity/user-activity.module';
import { UserPreferencesModule } from './modules/user-preferences/user-preferences.module';
import { UserProfilesModule } from './modules/user-profiles/user-profiles.module';
import { UsersModule } from './modules/users/users.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [
    UsersModule, 
    SharedModule, UserProfilesModule, UserPreferencesModule, UserActivityModule, UserAnalyticsModule, UserEngagementModule, UserGroupsModule, UserGroupMembershipModule, UserProfileMetricsModule, AdSpacesModule, AdCreativesModule, CampaignsModule, AdPerformanceModule, TargetAudiencesModule, AdminDashboardMetricsModule, AuditLogsModule, FraudDetectionModule, RegulatoryComplianceModule, ConsentManagementModule, AccessControlListModule, DataRetentionPolicyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
