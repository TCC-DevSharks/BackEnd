import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {
  }
  async create(body: CreateUserDto): Promise<User> {
    const createdUser = await new this.userModel(body).save();
    return createdUser.toObject();
  }

  async findAll(): Promise<User[]> {

    const users =(await this.userModel.find().lean())

    console.log(users);

    return users
  }
}

