import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { EnxovalService } from './enxoval.service';

describe('EnxovalService', () => {
  let service: EnxovalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [EnxovalService, PrismaService],
    }).compile();

    service = module.get<EnxovalService>(EnxovalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
