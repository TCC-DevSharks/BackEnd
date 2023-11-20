import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateMessagesDto } from './dto/create-messages.dto';
import { Message } from './schema/messages.schema';

@Injectable()
export class MessageService {
  constructor(
    @Inject('FORUM-MESSAGE_MODEL') private readonly messageModel: Model<Message>
  ) {
  }
  async create(body: CreateMessagesDto): Promise<Message> {
    const createdMessage = await new this.messageModel(body).save();
    return createdMessage.toObject();
  }

  async findAll(): Promise<Message[]> {
    const messages = await this.messageModel.find().lean();
  
    // Converter o _id de cada documento em uma string
    const usersWithIdAsString = messages.map(user => {
      return {
        ...user,
        _id: user._id.toString(), // Converte o _id para string
      };
    });
  
    return usersWithIdAsString;
  }

  async findById(id: string): Promise<any> {
    const messages = await this.messageModel.find({topic: id}).lean();
  
    // Converter o _id de cada documento em uma string
    const usersWithIdAsString = messages.map(msg =>{

      return{
        ...msg,
        _id: msg._id.toString()
      }
      
    })
  
    return usersWithIdAsString;
  }
}

