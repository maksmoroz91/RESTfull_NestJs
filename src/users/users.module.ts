import { Module } from "@nestjs/common";
import { UsersService } from "@src/users/users.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "@src/users/entities/user.entity";

@Module({
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema}
    ]),
  ],
  exports: [UsersService]
})
export class UsersModule {}
