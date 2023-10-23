import { Inject, Injectable } from '@nestjs/common';
import { CreateChatUserDto, CreateChatMessagesDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class ChatUserService {

  constructor(
    @Inject('USER_MODEL') private readonly userModel: Model<User>
  ) {
  }
  async createUser(body: CreateChatUserDto): Promise<User>  {

    console.log(body);
    
    try {
      const data = await new this.userModel(body).save()

      return data.toObject()

  
    } catch (ex) {
      console.log(ex);
      
    }
  }

  async findAllUsers(): Promise<User[]> {
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

  async findOne(email: string, usuario: string): Promise<User> {

    try{
      const user = await this.userModel.findOne({email, usuario}).lean()

      const usersWithIdAsString = 
     {
      ...user,
      _id: user._id.toString()
     }
        
      return usersWithIdAsString;
    }catch(error){
      console.log("erro");
      
    }


  }

  async update(id: number, updateChatDto: UpdateChatDto) {

  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
