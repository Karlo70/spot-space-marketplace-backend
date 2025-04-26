import { Test, TestingModule } from '@nestjs/testing';
import { AdCreativesService } from './ad-creatives.service';

describe('AdCreativesService', () => {
  let service: AdCreativesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdCreativesService],
    }).compile();

    service = module.get<AdCreativesService>(AdCreativesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
