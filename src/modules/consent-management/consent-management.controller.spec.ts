import { Test, TestingModule } from '@nestjs/testing';
import { ConsentManagementController } from './consent-management.controller';
import { ConsentManagementService } from './consent-management.service';

describe('ConsentManagementController', () => {
  let controller: ConsentManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsentManagementController],
      providers: [ConsentManagementService],
    }).compile();

    controller = module.get<ConsentManagementController>(ConsentManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
