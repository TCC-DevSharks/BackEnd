import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { GestanteController } from './gestante.controller';
import { GestanteService } from './gestante.service';

describe('GestanteController', () => {
  let controller: GestanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestanteController],
      providers: [GestanteService, PrismaService],
    }).compile();

    controller = module.get<GestanteController>(GestanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
