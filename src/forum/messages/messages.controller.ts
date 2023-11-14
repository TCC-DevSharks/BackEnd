import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageService } from './messages.service';
import { CreateMessagesDto } from './dto/create-messages.dto';
import { UpdateMessagesDto } from './dto/update-messages.dto';

@Controller('forum/mensagem')
export class MessagesController {
  constructor(private readonly userService: MessageService) {}

  @Post()
  create(@Body() body: CreateMessagesDto) {

    console.log(body);
    
    return this.userService.create(body);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

}
