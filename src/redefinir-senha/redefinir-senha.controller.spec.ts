import { Test, TestingModule } from '@nestjs/testing';
import { ClinicaService } from '../clinica/clinica.service';
import { GestanteService } from '../gestante/gestante.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { RedefinirSenhaController } from './redefinir-senha.controller';
import { RedefinirSenhaService } from './redefinir-senha.service';

describe('RedefinirSenhaController', () => {
  let controller: RedefinirSenhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[PrismaModule],
      controllers: [RedefinirSenhaController],
      providers: [RedefinirSenhaService, GestanteService, PrismaService, ClinicaService],
    }).compile();

    controller = module.get<RedefinirSenhaController>(RedefinirSenhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
