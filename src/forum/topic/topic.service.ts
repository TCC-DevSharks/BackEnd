import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTopicDto } from './dto/create-topic.dto';
import { Topic } from './schema/topic.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class TopicService {
  constructor(
    @Inject('FORUM-TOPIC_MODEL') private readonly topicModel: Model<Topic>,
    private readonly forumUser: UserService
  ) {
  }
  async create(body: CreateTopicDto): Promise<Topic> {
    const createTopic = await new this.topicModel(body).save();
    return createTopic.toObject();
  }

  async findAll(): Promise<Topic[]> {
    const topics = await this.topicModel.find().lean();
  
    // Converter o _id de cada documento em uma string
    const usersWithIdAsString = topics.map(user => {

      const usuario = this.forumUser.findOneById(user._id.toString())
      console.log(usuario);
      
      return {
        ...user,
        _id: user._id.toString(), // Converte o _id para string
        dados: usuario 
      };
    });
  
    return usersWithIdAsString;
  }
}

