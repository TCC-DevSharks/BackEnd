import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { DatabaseModule } from '../../mongodb/database.module';
import { topicProviders } from './topic.providers';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { userProviders } from '../user/user.providers';
import { MessagesModule } from '../messages/messages.module';
import { MessageService } from '../messages/messages.service';
import { messagesProviders } from '../messages/messages.providers';

@Module({
  imports: [DatabaseModule, UserModule, MessagesModule],
  controllers: [TopicController],
  providers: [TopicService, ...topicProviders, UserService, ...userProviders, MessageService, ...messagesProviders],
})
export class TopicModule {}
