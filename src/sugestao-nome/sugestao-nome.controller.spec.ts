import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { SugestaoNomeController } from './sugestao-nome.controller';
import { SugestaoNomeService } from './sugestao-nome.service';

describe('SugestaoNomeController', () => {
  let controller: SugestaoNomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SugestaoNomeController],
      providers: [SugestaoNomeService, PrismaService],
    }).compile();

    controller = module.get<SugestaoNomeController>(SugestaoNomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
