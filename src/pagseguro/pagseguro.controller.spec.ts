import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { PagseguroController } from './pagseguro.controller';
import { PagseguroService } from './pagseguro.service';

describe('PagseguroController', () => {
  let controller: PagseguroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PagseguroController],
      providers: [PagseguroService, PrismaService],
    }).compile();

    controller = module.get<PagseguroController>(PagseguroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
