import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { MalaMaternidadeService } from './mala-maternidade.service';

describe('MalaMaternidadeService', () => {
  let service: MalaMaternidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
  providers: [MalaMaternidadeService, PrismaService],
    }).compile();

    service = module.get<MalaMaternidadeService>(MalaMaternidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
