import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { Use } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @Inject('FORUM-USER_MODEL') private readonly userModel: Model<Use>
  ) {
  }
  async create(body: CreateUserDto): Promise<Use> {
    const createdUser = await new this.userModel(body).save();
    return createdUser.toObject();
  }

  async findAll(): Promise<Use[]> {
    const users = await this.userModel.find().lean();
  
    // Converter o _id de cada documento em uma string
    const usersWithIdAsString = users.map(user => {
      return {
        ...user,
        _id: user._id.toString(), // Converte o _id para string
      };
    });
  
    return usersWithIdAsString;
  }

  async findOne(mysql: number){

    try{
      const user = await this.userModel.findOne({mysql}).lean()

      const usersWithIdAsString = 
     {
      ...user,
      _id: user._id.toString()
     }
        
      return usersWithIdAsString;
    }catch(error){
      
      return ""
    }
}

}

