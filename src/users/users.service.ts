import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "@src/users/entities/user.entity";
import { CreateUserDto } from "@src/users/dto/create-user.dto";


@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {
    }

    async findByEmail(email: string): Promise<User> {
        return this.userModel.findOne({email})
    }

    async findById(id: string) {
        return this.userModel.findOne({id})
    }

    async create(dto: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(dto);
        return newUser.save();
    }
}
