import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { ProntuarioService } from './prontuario.service';

describe('ProntuarioService', () => {
  let service: ProntuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ProntuarioService, PrismaService],
    }).compile();

    service = module.get<ProntuarioService>(ProntuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
