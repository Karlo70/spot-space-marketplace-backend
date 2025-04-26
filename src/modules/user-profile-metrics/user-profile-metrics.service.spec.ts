import { Test, TestingModule } from '@nestjs/testing';
import { UserProfileMetricsService } from './user-profile-metrics.service';

describe('UserProfileMetricsService', () => {
  let service: UserProfileMetricsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProfileMetricsService],
    }).compile();

    service = module.get<UserProfileMetricsService>(UserProfileMetricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
