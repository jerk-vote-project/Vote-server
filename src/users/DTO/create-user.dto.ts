import { IsString, IsNumber, IsEmail, IsPhoneNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @ApiProperty()
    phone: string;

    @IsEmail()
    email: string;

    @ApiProperty()
    password: string;

}
