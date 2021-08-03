import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './DTO/update-user.dto';
import { CreateUserDto } from './DTO/create-user.dto';
import { isNumber } from 'class-validator';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Get()
    getAll(): User[] {
        return this.userService.getAll();
    }

    // @Get("search")
    // search(@Query("id") userId: string) {
    //     return `We are searching for a movie with a title`;
    // }

    @Get(":id")
    getOne(@Param("id") userId: number): User {
        return this.userService.getOne(userId);
    }

    @Post()
    create(@Body() userData: CreateUserDto) {
        console.log("sign up signal called")
        return this.userService.createUser(userData);
    }

    @Delete(':id')
    remove(@Param('id') userId: number) {
        return this.userService.deleteOne(userId);
    }

    @Patch(":id")
    update(@Param('id') userId: number, @Body() updateData: UpdateUserDto) {
        return this.userService.update(userId, updateData);
    }

}
