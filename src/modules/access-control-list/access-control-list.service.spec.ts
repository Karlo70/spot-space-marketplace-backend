import { Test, TestingModule } from '@nestjs/testing';
import { AccessControlListService } from './access-control-list.service';

describe('AccessControlListService', () => {
  let service: AccessControlListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessControlListService],
    }).compile();

    service = module.get<AccessControlListService>(AccessControlListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
