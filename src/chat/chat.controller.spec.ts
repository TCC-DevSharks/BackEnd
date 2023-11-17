import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../mongodb/database.module';
import { PrismaService } from '../prisma/prisma.service';
import { ChatController } from './chat.controller';
import { messageProviders, userProviders } from './chat.providers';
import { ChatService } from './chat.service';
import { ChatUserController } from './chatUser.controller';
import { ChatUserService } from './chatUser.service';

describe('ChatController', () => {
  let controller: ChatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[DatabaseModule],
      controllers: [ChatController, ChatUserController],
      providers: [ChatService,ChatUserService,...messageProviders, ...userProviders],
    }).compile();

    controller = module.get<ChatController>(ChatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
