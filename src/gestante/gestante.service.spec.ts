import { ClassSerializerInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { GestanteService } from './gestante.service';

describe('GestanteService', () => {
  let service: GestanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [
        GestanteService,
        PrismaService,
        {
          provide: APP_INTERCEPTOR,
          useClass: ClassSerializerInterceptor,
        },
      ],
    }).compile();

    service = module.get<GestanteService>(GestanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
