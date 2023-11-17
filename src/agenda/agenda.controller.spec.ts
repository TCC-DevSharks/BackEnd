import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { AgendaController } from './agenda.controller';
import { AgendaService } from './agenda.service';

describe('AgendaController', () => {
  let controller: AgendaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendaController],
      providers: [AgendaService, PrismaService],
    }).compile();

    controller = module.get<AgendaController>(AgendaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
