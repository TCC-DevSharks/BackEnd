import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../mongodb/database.module';
import { messageProviders, userProviders } from './chat.providers';
import { ChatService } from './chat.service';
import { ChatUserService } from './chatUser.service';

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[DatabaseModule],
  providers: [ChatService,ChatUserService,...messageProviders, ...userProviders],
    }).compile();

    service = module.get<ChatService>(ChatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
