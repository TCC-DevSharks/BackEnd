import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatUserDto, CreateChatMessagesDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async create(@Body() body: CreateChatMessagesDto) {
    console.log(body);
    
    return await this.chatService.createMessage(body);
  }

  @Get()
  async findAll() {
    return await this.chatService.findAll();
  }

  @Get('mensagem')
  findOne(@Query('from') from: string, @Query('to') to: string) {
    return this.chatService.findOne(from, to);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatService.update(+id, updateChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatService.remove(+id);
  }
}
