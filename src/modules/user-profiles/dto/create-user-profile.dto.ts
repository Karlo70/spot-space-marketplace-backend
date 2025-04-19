import { IsOptional, IsString } from 'class-validator';

export class CreateUserProfileDto {
    @IsOptional() @IsString() address?: string;
    @IsOptional() @IsString() city?: string;
    @IsOptional() @IsString() country?: string;
    @IsOptional() @IsString() postal_code?: string;
    @IsOptional() @IsString() bio?: string;
    @IsOptional() @IsString() website?: string;
    @IsOptional() preferences?: any;
}
