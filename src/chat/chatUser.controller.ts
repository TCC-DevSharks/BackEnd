import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ChatUserService } from './chatUser.service';
import { CreateChatUserDto, CreateChatMessagesDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('user')
export class ChatUserController {
  constructor(private readonly chatService: ChatUserService) {}

  @Post('chat')
  async create(@Body() body: CreateChatUserDto) {
    return await this.chatService.createUser(body);
  }

  @Get('chat')
  async findAll() {
    return await this.chatService.findAllUsers();
    }

  @Get('one')
  update(@Query('email') email: string,@Query('usuario') usuario: string, ) {
    return this.chatService.findOne(email,usuario)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatService.remove(+id);
  }
}
