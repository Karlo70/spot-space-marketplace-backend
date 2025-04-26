import { Test, TestingModule } from '@nestjs/testing';
import { TargetAudiencesService } from './target-audiences.service';

describe('TargetAudiencesService', () => {
  let service: TargetAudiencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TargetAudiencesService],
    }).compile();

    service = module.get<TargetAudiencesService>(TargetAudiencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
