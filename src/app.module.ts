import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { SharedModule } from './shared/shared.module';
import { UserProfilesModule } from './modules/user-profiles/user-profiles.module';

@Module({
  imports: [
    UsersModule, 
    SharedModule, UserProfilesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
