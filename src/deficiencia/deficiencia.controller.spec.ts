import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { DeficienciaController } from './deficiencia.controller';
import { DeficienciaService } from './deficiencia.service';

describe('DeficienciaController', () => {
  let controller: DeficienciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeficienciaController],
      providers: [DeficienciaService, PrismaService],
    }).compile();

    controller = module.get<DeficienciaController>(DeficienciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
