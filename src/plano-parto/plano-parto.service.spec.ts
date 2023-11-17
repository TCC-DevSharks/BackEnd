import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { PlanoPartoService } from './plano-parto.service';

describe('PlanoPartoService', () => {
  let service: PlanoPartoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [PlanoPartoService, PrismaService],
    }).compile();

    service = module.get<PlanoPartoService>(PlanoPartoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
