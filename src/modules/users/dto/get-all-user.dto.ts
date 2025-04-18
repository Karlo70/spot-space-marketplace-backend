// src/users/dto/get-all-users.dto.ts
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { UserRole, UserStatus } from '../entities/user.entity';

export class GetAllUsersDto {
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @IsOptional()
  @IsEnum(UserStatus)
  status?: UserStatus;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @Type(() => Date)
  createdFrom?: Date;

  @IsOptional()
  @Type(() => Date)
  createdTo?: Date;
}
