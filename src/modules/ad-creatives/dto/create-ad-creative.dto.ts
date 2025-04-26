import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAdCreativeDto {
  @IsNotEmpty()
  @IsString()
  file_url: string;

  @IsNotEmpty()
  @IsString()
  file_type: string;
}
