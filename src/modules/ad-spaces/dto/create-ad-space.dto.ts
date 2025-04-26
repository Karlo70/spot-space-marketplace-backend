import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAdSpaceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  dimensions: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
