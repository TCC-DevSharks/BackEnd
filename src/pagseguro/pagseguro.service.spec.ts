import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { PagseguroService } from './pagseguro.service';

describe('PagseguroService', () => {
  let service: PagseguroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [PagseguroService, PrismaService],
    }).compile();

    service = module.get<PagseguroService>(PagseguroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
