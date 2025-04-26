import { Test, TestingModule } from '@nestjs/testing';
import { AdCreativesController } from './ad-creatives.controller';
import { AdCreativesService } from './ad-creatives.service';

describe('AdCreativesController', () => {
  let controller: AdCreativesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdCreativesController],
      providers: [AdCreativesService],
    }).compile();

    controller = module.get<AdCreativesController>(AdCreativesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
