import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../mongodb/database.module';
import { topicProviders } from './topic.providers';
import { TopicService } from './topic.service';
import { UserModule } from '../user/user.module';
import { userProviders } from '../user/user.providers';
import { UserService } from '../user/user.service';

describe('TopicService', () => {
  let service: TopicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, UserModule],
      providers: [TopicService, ...topicProviders, ...userProviders, UserService],
    }).compile();

    service = module.get<TopicService>(TopicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
