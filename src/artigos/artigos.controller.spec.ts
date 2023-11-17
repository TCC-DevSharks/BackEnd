import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ArtigosController } from './artigos.controller';
import { ArtigosService } from './artigos.service';

describe('ArtigosController', () => {
  let controller: ArtigosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtigosController],
      providers: [ArtigosService, PrismaService],
    }).compile();

    controller = module.get<ArtigosController>(ArtigosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
