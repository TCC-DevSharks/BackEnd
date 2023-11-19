import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { DatabaseModule } from '../../mongodb/database.module';
import { topicProviders } from './topic.providers';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { useProviders } from '../user/user.providers';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [TopicController],
  providers: [TopicService, ...topicProviders, UserService, ...useProviders],
})
export class TopicModule {}
