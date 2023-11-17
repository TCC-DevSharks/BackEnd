import { Test, TestingModule } from '@nestjs/testing';
import { ChatModule } from '../chat/chat.module';
import { userProviders } from '../chat/chat.providers';
import { ChatUserService } from '../chat/chatUser.service';
import { GestanteService } from '../gestante/gestante.service';
import { DatabaseModule } from '../mongodb/database.module';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { ProfissionalService } from '../profissional/profissional.service';
import { ConsultaService } from './consulta.service';

describe('ConsultaService', () => {
  let service: ConsultaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule,  ChatModule, DatabaseModule],
      providers: [ConsultaService, PrismaService, GestanteService, ProfissionalService, ChatUserService, ...userProviders],
    }).compile();

    service = module.get<ConsultaService>(ConsultaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
