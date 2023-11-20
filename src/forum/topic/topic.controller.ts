import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopicService } from './topic.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { UserService } from '../user/user.service';

@Controller('forum/topico')
export class TopicController {
  constructor(
    private readonly topicService: TopicService, 
    private readonly userService: UserService) {}

  @Post()
  create(@Body() body: CreateTopicDto) {

    console.log(body);
    
    return this.topicService.create(body);
  }

  @Get()
  async findAll() {
    return {topics:await this.topicService.findAll()}
  }

  @Get(':id')
  async findOneByID(@Param("id")id: string) {
    return {topic:await this.topicService.findOneById(id)}
  }


}
