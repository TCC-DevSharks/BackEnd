import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../mongodb/database.module';
import { PrismaService } from '../../prisma/prisma.service';
import { TopicController } from './topic.controller';
import { topicProviders } from './topic.providers';
import { TopicService } from './topic.service';
import { MessageService } from '../messages/messages.service';
import { MessagesController } from '../messages/messages.controller';
import { MessagesModule } from '../messages/messages.module';
import { messagesProviders } from '../messages/messages.providers';
import { UserService } from '../user/user.service';
import { userProviders } from '../user/user.providers';

describe('UserController', () => {
  let controller: TopicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, MessagesModule],
      controllers: [TopicController, MessagesController],
      providers: [TopicService, ...topicProviders, MessageService, ...messagesProviders, UserService, ...userProviders],
    }).compile();

    controller = module.get<TopicController>(TopicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
