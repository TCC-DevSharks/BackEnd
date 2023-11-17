import { Test, TestingModule } from '@nestjs/testing';
import { ChatModule } from '../chat/chat.module';
import { userProviders } from '../chat/chat.providers';
import { ChatUserService } from '../chat/chatUser.service';
import { DatabaseModule } from '../mongodb/database.module';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { ProfissionalService } from './profissional.service';

describe('ProfissionalService', () => {
  let service: ProfissionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, ChatModule, DatabaseModule],
      providers: [ProfissionalService, PrismaService,  ChatUserService, ...userProviders],
    }).compile();

    service = module.get<ProfissionalService>(ProfissionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
