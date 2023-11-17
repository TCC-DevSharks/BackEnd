import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { MedicacaoController } from './medicacao.controller';
import { MedicacaoService } from './medicacao.service';

describe('MedicacaoController', () => {
  let controller: MedicacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicacaoController],
      providers: [MedicacaoService, PrismaService],
    }).compile();

    controller = module.get<MedicacaoController>(MedicacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
