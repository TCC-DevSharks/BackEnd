import { Test, TestingModule } from '@nestjs/testing';
import { PlanoPartoService } from './plano-parto.service';

describe('PlanoPartoService', () => {
  let service: PlanoPartoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanoPartoService],
    }).compile();

    service = module.get<PlanoPartoService>(PlanoPartoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
