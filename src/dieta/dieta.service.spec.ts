import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { DietaService } from './dieta.service';

describe('DietaService', () => {
  let service: DietaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [DietaService,PrismaService],
    }).compile();

    service = module.get<DietaService>(DietaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
