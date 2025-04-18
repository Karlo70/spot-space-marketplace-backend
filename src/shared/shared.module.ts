import { Global, Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { SharedController } from './shared.controller';
@Global()
@Module({
  controllers: [SharedController],
  providers: [SharedService],
  exports:[]
})
export class SharedModule {}
