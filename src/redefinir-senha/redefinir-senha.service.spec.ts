import { Test, TestingModule } from '@nestjs/testing';
import { ClinicaService } from '../clinica/clinica.service';
import { GestanteService } from '../gestante/gestante.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { RedefinirSenhaService } from './redefinir-senha.service';

describe('RedefinirSenhaService', () => {
  let service: RedefinirSenhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[PrismaModule],
      providers: [RedefinirSenhaService, GestanteService, PrismaService, ClinicaService],
    }).compile();

    service = module.get<RedefinirSenhaService>(RedefinirSenhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
