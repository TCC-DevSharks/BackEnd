import { Test, TestingModule } from '@nestjs/testing';
import { ChatModule } from '../chat/chat.module';
import { userProviders } from '../chat/chat.providers';
import { DatabaseModule } from '../mongodb/database.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ChatUserService } from '../chat/chatUser.service';
import { PrismaService } from '../prisma/prisma.service';
import { ProfissionalController } from './profissional.controller';
import { ProfissionalService } from './profissional.service';

describe('ProfissionalController', () => {
  let controller: ProfissionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, ChatModule, DatabaseModule],
      controllers: [ProfissionalController],
      providers: [ProfissionalService, PrismaService,  ChatUserService, ...userProviders],
    }).compile();

    controller = module.get<ProfissionalController>(ProfissionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
