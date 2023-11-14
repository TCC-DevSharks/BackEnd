import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopicService } from './topic.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

@Controller('forum/topico')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Post()
  create(@Body() body: CreateTopicDto) {

    console.log(body);
    
    return this.topicService.create(body);
  }

  @Get()
  findAll() {
    return this.topicService.findAll();
  }

}
