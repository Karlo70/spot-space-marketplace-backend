import { IsDateString, IsEnum } from 'class-validator';
import { GetAllDto } from 'src/modules/shared/dtos/getAll.dto';
import { UserRole, UserStatus } from '../entities/user.entity';

export class GetAllUserDto extends GetAllDto {
  @IsEnum(UserStatus)
  status: UserStatus;

  @IsEnum(UserRole)
  role: UserRole;

  @IsDateString()
  end_date: Date;

  @IsDateString()
  start_date: Date;
}
