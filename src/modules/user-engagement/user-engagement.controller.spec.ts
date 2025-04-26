import { Test, TestingModule } from '@nestjs/testing';
import { UserEngagementController } from './user-engagement.controller';
import { UserEngagementService } from './user-engagement.service';

describe('UserEngagementController', () => {
  let controller: UserEngagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserEngagementController],
      providers: [UserEngagementService],
    }).compile();

    controller = module.get<UserEngagementController>(UserEngagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
