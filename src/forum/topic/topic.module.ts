import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { DatabaseModule } from '../../mongodb/database.module';
import { topicProviders } from './topic.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TopicController],
  providers: [TopicService, ...topicProviders],
})
export class TopicModule {}
