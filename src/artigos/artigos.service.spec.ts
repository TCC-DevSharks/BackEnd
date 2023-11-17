import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { ArtigosService } from './artigos.service';

describe('ArtigosService', () => {
  let service: ArtigosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
  providers: [ArtigosService, PrismaService],
    }).compile();

    service = module.get<ArtigosService>(ArtigosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
