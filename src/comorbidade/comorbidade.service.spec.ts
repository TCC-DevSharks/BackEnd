import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { ComorbidadeService } from './comorbidade.service';

describe('ComorbidadeService', () => {
  let service: ComorbidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ComorbidadeService, PrismaService],
    }).compile();

    service = module.get<ComorbidadeService>(ComorbidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
