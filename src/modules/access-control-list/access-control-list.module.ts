import { Module } from '@nestjs/common';
import { AccessControlListService } from './access-control-list.service';
import { AccessControlListController } from './access-control-list.controller';

@Module({
  controllers: [AccessControlListController],
  providers: [AccessControlListService],
})
export class AccessControlListModule {}
