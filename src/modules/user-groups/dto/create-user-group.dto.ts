import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserGroupDto {
  @IsNotEmpty()
  @IsString()
  group_name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
