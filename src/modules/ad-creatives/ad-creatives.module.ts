import { Module } from '@nestjs/common';
import { AdCreativesService } from './ad-creatives.service';
import { AdCreativesController } from './ad-creatives.controller';

@Module({
  controllers: [AdCreativesController],
  providers: [AdCreativesService],
})
export class AdCreativesModule {}
