import { Module } from '@nestjs/common';
import { MessageService } from './messages.service';
import { MessagesController } from './messages.controller';
import { DatabaseModule } from 'src/mongodb/database.module';
import { messageProviders } from './messages.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MessagesController],
  providers: [MessageService, ...messageProviders],
})
export class MessagesModule {}
