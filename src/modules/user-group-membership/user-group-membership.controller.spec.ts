import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupMembershipController } from './user-group-membership.controller';
import { UserGroupMembershipService } from './user-group-membership.service';

describe('UserGroupMembershipController', () => {
  let controller: UserGroupMembershipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserGroupMembershipController],
      providers: [UserGroupMembershipService],
    }).compile();

    controller = module.get<UserGroupMembershipController>(UserGroupMembershipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
