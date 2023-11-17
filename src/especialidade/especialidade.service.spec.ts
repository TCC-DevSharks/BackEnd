import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { EspecialidadeService } from './especialidade.service';

describe('EspecialidadeService', () => {
  let service: EspecialidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [EspecialidadeService, PrismaService],
    }).compile();

    service = module.get<EspecialidadeService>(EspecialidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
