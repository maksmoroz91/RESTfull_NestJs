import { Module } from "@nestjs/common";
import { UsersService } from "@src/users/users.service";
import { UsersController } from "@src/users/users.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "@src/users/entities/user.entity";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema}
    ]),
  ]
})
export class UsersModule {}
