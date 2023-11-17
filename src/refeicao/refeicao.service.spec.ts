import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { RefeicaoService } from './refeicao.service';

describe('RefeicaoService', () => {
  let service: RefeicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [RefeicaoService, PrismaService],
    }).compile();

    service = module.get<RefeicaoService>(RefeicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
