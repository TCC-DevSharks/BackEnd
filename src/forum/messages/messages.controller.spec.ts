import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../mongodb/database.module';
import { PrismaService } from '../../prisma/prisma.service';
import { MessagesController } from './messages.controller';
import { messageProviders } from './messages.providers';
import { MessageService } from './messages.service';

describe('UserController', () => {
  let controller: MessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [MessagesController],
      providers: [MessageService, ...messageProviders],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
