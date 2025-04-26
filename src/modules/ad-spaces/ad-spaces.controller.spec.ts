import { Test, TestingModule } from '@nestjs/testing';
import { AdSpacesController } from './ad-spaces.controller';
import { AdSpacesService } from './ad-spaces.service';

describe('AdSpacesController', () => {
  let controller: AdSpacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdSpacesController],
      providers: [AdSpacesService],
    }).compile();

    controller = module.get<AdSpacesController>(AdSpacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
