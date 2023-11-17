import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { DeficienciaService } from './deficiencia.service';

describe('DeficienciaService', () => {
  let service: DeficienciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[PrismaModule],
      providers: [DeficienciaService,PrismaService],
    }).compile();

    service = module.get<DeficienciaService>(DeficienciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
