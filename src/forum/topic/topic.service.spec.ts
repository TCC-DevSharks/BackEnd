import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../mongodb/database.module';
import { topicProviders } from './topic.providers';
import { TopicService } from './topic.service';

describe('TopicService', () => {
  let service: TopicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [TopicService, ...topicProviders],
    }).compile();

    service = module.get<TopicService>(TopicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
