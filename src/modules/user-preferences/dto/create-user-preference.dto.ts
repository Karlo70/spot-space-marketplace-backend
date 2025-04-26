import { IsNotEmpty, IsString, IsJSON } from 'class-validator';

export class CreateUserPreferenceDto {
  @IsNotEmpty()
  @IsString()
  language: string;

  @IsNotEmpty()
  @IsString()
  currency: string;

  @IsNotEmpty()
  @IsJSON()
  notification_preferences: any;
}
