import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { DatabaseModule } from 'src/mongodb/database.module';
import { messageProviders } from './chat.providers';
import { ChatUserController } from './chatUser.controller';
import { ChatUserService } from './chatUser.service';
import { userProviders } from './chat.providers'

@Module({
  imports:[DatabaseModule],
  controllers: [ChatController, ChatUserController],
  providers: [ChatService,ChatUserService,...messageProviders, ...userProviders],
})
export class ChatModule {}
