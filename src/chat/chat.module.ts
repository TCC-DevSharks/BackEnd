import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { DatabaseModule } from 'src/mongodb/database.module';
import { messageProviders } from './chat.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [ChatController],
  providers: [ChatService,...messageProviders],
})
export class ChatModule {}
