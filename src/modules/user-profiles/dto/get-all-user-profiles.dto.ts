import { IsOptional, IsString } from 'class-validator';

export class GetAllUserProfilesDto {
  @IsOptional() @IsString() city?: string;
  @IsOptional() @IsString() country?: string;
  @IsOptional() @IsString() search?: string;
  @IsOptional() page: number = 1;
  @IsOptional() limit: number = 10;
}
