import { Test, TestingModule } from '@nestjs/testing';
import { ChatModule } from '../chat/chat.module';
import { userProviders } from '../chat/chat.providers';
import { ChatUserService } from '../chat/chatUser.service';
import { GestanteService } from '../gestante/gestante.service';
import { DatabaseModule } from '../mongodb/database.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ProfissionalService } from '../profissional/profissional.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConsultaController } from './consulta.controller';
import { ConsultaService } from './consulta.service';
import { ClinicaService } from '../clinica/clinica.service';
import { ClinicaModule } from '../clinica/clinica.module';

describe('ConsultaController', () => {
  let controller: ConsultaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule,  ChatModule, DatabaseModule, ClinicaModule],
      controllers: [ConsultaController],
      providers: [ConsultaService, PrismaService, GestanteService, ProfissionalService, ChatUserService, ...userProviders, ClinicaService],
    }).compile();

    controller = module.get<ConsultaController>(ConsultaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
