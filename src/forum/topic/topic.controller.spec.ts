import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../mongodb/database.module';
import { PrismaService } from '../../prisma/prisma.service';
import { TopicController } from './topic.controller';
import { topicProviders } from './topic.providers';
import { TopicService } from './topic.service';

describe('UserController', () => {
  let controller: TopicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [TopicController],
      providers: [TopicService, ...topicProviders],
    }).compile();

    controller = module.get<TopicController>(TopicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
