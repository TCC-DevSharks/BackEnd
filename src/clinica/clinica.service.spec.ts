import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ClinicaController } from './clinica.controller';
import { ClinicaModule } from './clinica.module';
import { ClinicaService } from './clinica.service';

describe('ClinicaService', () => {
  let service: ClinicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicaController],
      providers: [ClinicaService, PrismaService],
    }).compile();

    service = module.get<ClinicaService>(ClinicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
