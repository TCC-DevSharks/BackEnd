import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopicService } from './topic.service';
import { CreateTopicDto } from './dto/create-topic.dto';

@Controller('forum/topico')
export class TopicController {
  constructor(
    private readonly topicService: TopicService) {}

  @Post()
  create(@Body() body: CreateTopicDto) {

    console.log(body);
    
    return this.topicService.create(body);
  }

  @Get()
  async findAll() {
    return {topics:await this.topicService.findAll()}
  }

  @Get('categoria/:id')
  async findAllById(@Param('id')id: string) {
    return {topics:await this.topicService.findAllByCategory(id)}
  }

  @Get(':id')
  async findOneByID(@Param("id")id: string) {
    return {topic:await this.topicService.findOneById(id)}
  }


}
