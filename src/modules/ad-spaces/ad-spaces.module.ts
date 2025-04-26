import { Module } from '@nestjs/common';
import { AdSpacesService } from './ad-spaces.service';
import { AdSpacesController } from './ad-spaces.controller';

@Module({
  controllers: [AdSpacesController],
  providers: [AdSpacesService],
})
export class AdSpacesModule {}
