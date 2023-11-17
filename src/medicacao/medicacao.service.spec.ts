import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { MedicacaoService } from './medicacao.service';

describe('MedicacaoService', () => {
  let service: MedicacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[PrismaModule],
      providers: [MedicacaoService, PrismaService],
    }).compile();

    service = module.get<MedicacaoService>(MedicacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
