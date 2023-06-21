import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "@src/users/entities/user.entity";


@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {
    }

    async findByEmail(email: string) {
        return this.userModel.findOne({email})
    }
}
