import { Module } from '@nestjs/common';
import { MessageService } from './messages.service';
import { MessagesController } from './messages.controller';
import { DatabaseModule } from '../../mongodb/database.module';
import { messagesProviders } from './messages.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MessagesController],
  providers: [MessageService, ...messagesProviders],
})
export class MessagesModule {}
