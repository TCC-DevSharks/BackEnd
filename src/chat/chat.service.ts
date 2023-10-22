import { Inject, Injectable } from '@nestjs/common';
import { CreateChatUserDto, CreateChatMessagesDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Message } from './schema/message.schema';
import { Model } from 'mongoose';

@Injectable()
export class ChatService {

  constructor(
    @Inject('MESSAGE_MODEL') private readonly messagesModel: Model<Message>
  ) {
  }
  async create(body: CreateChatMessagesDto): Promise<Message>  {
    try {
      const data = await new this.messagesModel(body).save()

      return data.toObject()

  
    } catch (ex) {
      console.log(ex);
      
    }
  }

  async findAll(): Promise<Message[]> {
    const users = await this.messagesModel.find().lean();
  
    // Converter o _id de cada documento em uma string
    const usersWithIdAsString = users.map(user => {
      return {
        ...user,
        _id: user._id.toString(), // Converte o _id para string
      };
    });
  
    return usersWithIdAsString;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
