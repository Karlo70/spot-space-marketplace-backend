import { Test, TestingModule } from '@nestjs/testing';
import { TargetAudiencesController } from './target-audiences.controller';
import { TargetAudiencesService } from './target-audiences.service';

describe('TargetAudiencesController', () => {
  let controller: TargetAudiencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TargetAudiencesController],
      providers: [TargetAudiencesService],
    }).compile();

    controller = module.get<TargetAudiencesController>(TargetAudiencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
