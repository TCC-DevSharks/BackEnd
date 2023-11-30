import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTopicDto } from './dto/create-topic.dto';
import { Topic } from './schema/topic.schema';
import { UserService } from '../user/user.service';
import { log } from 'console';
import { MessageService } from '../messages/messages.service';

@Injectable()
export class TopicService {
  constructor(
    @Inject('FORUM-TOPIC_MODEL') 
    private readonly topicModel: Model<Topic>,
    private readonly forumUser: UserService,
    private readonly forumMessages: MessageService
  ) {
  }
  async create(body: CreateTopicDto): Promise<Topic> {
    const createTopic = await new this.topicModel(body).save();
    return createTopic.toObject();
  }

  async findAll(): Promise<any> {
    const topics = await this.topicModel.find().lean();
  
    // Converter o _id de cada documento em uma string
    const usersWithIdAsString = topics.map(user => {
      return {
        ...user,
        _id: user._id.toString(), // Converte o _id para string
      };
    });
  
    const topic = usersWithIdAsString.map(async user => {
      const usuario = await this.forumUser.findOneById(user.user.toString());
  
      return {
        ...user,
        user: usuario,
      };
    });
  
    const resolvedTopics = await Promise.all(topic);
    const reversedTopics = resolvedTopics.reverse(); // Reverter a ordem dos tópicos
  
    console.log("topic", reversedTopics);
    return reversedTopics;
  }
  

  async findOneById(id: string):Promise<any> {
    try{
    
      const topic = await this.topicModel.findOne({_id: id}).lean()
      const usuario = await this.forumUser.findOneById(topic.user);
      const mensagens = await this.forumMessages.findById(topic._id.toString());

      const msgUser = mensagens.map(async msg =>{
          
        const usuario = await this.forumUser.findOneById(msg.user);

        return {
          ...msg,
          user: usuario
        }
      })
      
      const resolvedUsers = await Promise.all(msgUser);

      const usersWithIdAsString = 
     {
      ...topic,
      _id: topic._id.toString(),
      user: usuario,
      messages: resolvedUsers
     }
      return usersWithIdAsString;

    }catch(error){
      
      return "Erro"
    }

  }

  async findAllByCategory(id: string):Promise<any> {
    const topics = await this.topicModel.find({category: id}).lean();
  
    // Converter o _id de cada documento em uma string
    const usersWithIdAsString =  topics.map( user => {
      return {
        ...user,
        _id: user._id.toString(), // Converte o _id para string
      };
    });

   const topic = usersWithIdAsString.map(async (user) => {

     const usuario = await this.forumUser.findOneById(user.user.toString());

     return {
       ...user,
       user: usuario
     };

   })

   const resolvedTopics = await Promise.all(topic);
   const reversedTopics = resolvedTopics.reverse(); // Reverter a ordem dos tópicos
  
    console.log("topic", reversedTopics);
    return reversedTopics; 

  }
}

