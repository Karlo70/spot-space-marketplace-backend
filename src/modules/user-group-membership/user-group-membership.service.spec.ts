import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupMembershipService } from './user-group-membership.service';

describe('UserGroupMembershipService', () => {
  let service: UserGroupMembershipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserGroupMembershipService],
    }).compile();

    service = module.get<UserGroupMembershipService>(UserGroupMembershipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
