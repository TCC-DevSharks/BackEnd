import { Test, TestingModule } from '@nestjs/testing';
import { AlergiaService } from './alergia.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';


describe('AlergiaService', () => {
  let service: AlergiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[PrismaModule],
      providers: [AlergiaService,PrismaService],
    }).compile();

    service = module.get<AlergiaService>(AlergiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
