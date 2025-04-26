import { Test, TestingModule } from '@nestjs/testing';
import { UserProfileMetricsController } from './user-profile-metrics.controller';
import { UserProfileMetricsService } from './user-profile-metrics.service';

describe('UserProfileMetricsController', () => {
  let controller: UserProfileMetricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserProfileMetricsController],
      providers: [UserProfileMetricsService],
    }).compile();

    controller = module.get<UserProfileMetricsController>(UserProfileMetricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
