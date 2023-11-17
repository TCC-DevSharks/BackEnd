import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { SugestaoNomeService } from './sugestao-nome.service';

describe('SugestaoNomeService', () => {
  let service: SugestaoNomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [SugestaoNomeService, PrismaService],
    }).compile();

    service = module.get<SugestaoNomeService>(SugestaoNomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
