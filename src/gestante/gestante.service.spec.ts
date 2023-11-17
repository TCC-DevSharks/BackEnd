import { Test, TestingModule } from '@nestjs/testing';
import { GestanteService } from './gestante.service';

describe('GestanteService', () => {
  let service: GestanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GestanteService],
    }).compile();

    service = module.get<GestanteService>(GestanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
