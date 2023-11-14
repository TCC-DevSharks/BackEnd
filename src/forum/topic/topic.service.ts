import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';
import { CreateTopicDto } from './dto/create-topic.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { Topic } from './schema/topic.schema';

@Injectable()
export class TopicService {
  constructor(
    @Inject('FORUM-TOPIC_MODEL') private readonly topicModel: Model<Topic>
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
      return {
        ...user,
        _id: user._id.toString(), // Converte o _id para string
      };
    });
  
    return usersWithIdAsString;
  }
}

