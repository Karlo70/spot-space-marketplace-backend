import { Test, TestingModule } from '@nestjs/testing';
import { AccessControlListController } from './access-control-list.controller';
import { AccessControlListService } from './access-control-list.service';

describe('AccessControlListController', () => {
  let controller: AccessControlListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessControlListController],
      providers: [AccessControlListService],
    }).compile();

    controller = module.get<AccessControlListController>(AccessControlListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
