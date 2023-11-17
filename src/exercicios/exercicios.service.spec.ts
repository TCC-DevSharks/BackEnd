import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { ExerciciosService } from './exercicios.service';

describe('ExerciciosService', () => {
  let service: ExerciciosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[PrismaModule],
  providers: [ExerciciosService,PrismaService],
    }).compile();

    service = module.get<ExerciciosService>(ExerciciosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
