import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/shared/entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { HttpModule } from '@nestjs/axios';
import { DateRepository } from './date.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HttpModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, DateRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
