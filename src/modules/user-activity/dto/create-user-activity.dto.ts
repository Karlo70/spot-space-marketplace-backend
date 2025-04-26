import { IsNotEmpty, IsString, IsJSON } from 'class-validator';

export class CreateUserActivityDto {
  @IsNotEmpty()
  @IsString()
  activity_type: string;

  @IsNotEmpty()
  @IsJSON()
  activity_details: any;
}
