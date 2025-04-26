import { Test, TestingModule } from '@nestjs/testing';
import { UserEngagementService } from './user-engagement.service';

describe('UserEngagementService', () => {
  let service: UserEngagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserEngagementService],
    }).compile();

    service = module.get<UserEngagementService>(UserEngagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
