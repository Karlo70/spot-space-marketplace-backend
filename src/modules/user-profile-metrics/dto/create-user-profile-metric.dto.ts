import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserProfileMetricDto {
  @IsNotEmpty()
  @IsNumber()
  total_spent: number;

  @IsNotEmpty()
  @IsNumber()
  total_ads_clicked: number;
}
