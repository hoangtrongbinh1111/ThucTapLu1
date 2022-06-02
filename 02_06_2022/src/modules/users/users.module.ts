import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { User, UserSchema } from './users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { CaslModule } from 'src/casl/casl.module';
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [
    // forwardRef(() => AuthModule),
    forwardRef(() => CaslModule),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
