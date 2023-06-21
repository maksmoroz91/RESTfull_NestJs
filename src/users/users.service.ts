import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "@src/users/entities/user.entity";
import { Model } from "mongoose";


@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {
    }

    async findByEmail(email: string) {
        return this.userModel.findOne({email})
    }
}
