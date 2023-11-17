import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ProntuarioController } from './prontuario.controller';
import { ProntuarioService } from './prontuario.service';

describe('ProntuarioController', () => {
  let controller: ProntuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProntuarioController],
      providers: [ProntuarioService, PrismaService],
    }).compile();

    controller = module.get<ProntuarioController>(ProntuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
