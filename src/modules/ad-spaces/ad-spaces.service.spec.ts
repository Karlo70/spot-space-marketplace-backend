import { Test, TestingModule } from '@nestjs/testing';
import { AdSpacesService } from './ad-spaces.service';

describe('AdSpacesService', () => {
  let service: AdSpacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdSpacesService],
    }).compile();

    service = module.get<AdSpacesService>(AdSpacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
