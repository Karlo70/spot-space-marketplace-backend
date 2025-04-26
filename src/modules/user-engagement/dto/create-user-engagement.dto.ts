import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateUserEngagementDto {
  @IsNotEmpty()
  @IsString()
  engagement_type: string;

  @IsNotEmpty()
  @IsNumber()
  engagement_value: number;
}
