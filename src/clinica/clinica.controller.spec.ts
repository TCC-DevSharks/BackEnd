import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ClinicaController } from './clinica.controller';
import { ClinicaService } from './clinica.service';

describe('ClinicaController', () => {
  let controller: ClinicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicaController],
      providers: [ClinicaService, PrismaService],
    }).compile();

    controller = module.get<ClinicaController>(ClinicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
