import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users : User[] = [];

    getAll(): User[] {
        return this.users;
    }

    getOne(id: number): User {
        const user = this.users.find(user => user.id === +id);
        if(!user) {
            throw new NotFoundException(`Movie with ID ${id} not found`);
        } 
        return user;
    } 

    deleteOne(id: number) {
        this.getOne(id);
        this.users = this.users.filter(user => user.id !== +id);
    }

    createUser(userData: CreateUserDto) {
        console.log(userData);
        console.log("sibal")
        this.users.push({
            id: this.users.length + 1,
            ...userData,
        });
    }

    update(id: number, updateData: UpdateUserDto) {
        const user = this.getOne(id);
        this.deleteOne(id);
        this.users.push({
            ...user, ...updateData
        });
    }
}
