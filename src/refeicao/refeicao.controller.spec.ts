import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { RefeicaoController } from './refeicao.controller';
import { RefeicaoService } from './refeicao.service';

describe('RefeicaoController', () => {
  let controller: RefeicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefeicaoController],
      providers: [RefeicaoService, PrismaService],
    }).compile();

    controller = module.get<RefeicaoController>(RefeicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
