import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TransactionManagerService } from './services/transaction-manager.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlService } from './services/url.service';
import { User } from 'src/modules/users/entities/user.entity';
import Stripe from 'stripe';
import { LoginAttempt } from 'src/modules/auth/entities/login-attempt.entity';
import { RealTimeGateway } from './gateway/real-time.gateway';
import { S3Service } from './services/s3.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([LoginAttempt, User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRES_IN'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [
    TransactionManagerService,
    S3Service,
    RealTimeGateway,
    UrlService,
    {
      provide: 'STRIPE_CLIENT',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return new Stripe(configService.get<string>('STRIPE_SECRET_KEY'), {
          apiVersion: '2025-01-27.acacia',
        });
      },
    },
  ],
  exports: [
    JwtModule,
    TransactionManagerService,
    UrlService,
    TypeOrmModule,
    RealTimeGateway,
    S3Service,
    'STRIPE_CLIENT',
  ],
})
export class SharedModule {}
