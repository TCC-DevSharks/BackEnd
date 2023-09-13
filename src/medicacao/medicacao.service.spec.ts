import { Test, TestingModule } from '@nestjs/testing';
import { MedicacaoService } from './medicacao.service';

describe('MedicacaoService', () => {
  let service: MedicacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicacaoService],
    }).compile();

    service = module.get<MedicacaoService>(MedicacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
