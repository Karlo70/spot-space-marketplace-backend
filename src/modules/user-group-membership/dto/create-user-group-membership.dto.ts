import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserGroupMembershipDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsNumber()
  group_id: number;
}
