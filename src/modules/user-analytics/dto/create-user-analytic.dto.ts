import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateUserAnalyticDto {
  @IsNotEmpty()
  @IsString()
  metric_name: string;

  @IsNotEmpty()
  @IsNumber()
  metric_value: number;
}
