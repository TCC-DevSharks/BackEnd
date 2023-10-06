import { Test, TestingModule } from '@nestjs/testing';
import { RefeicaoService } from './refeicao.service';

describe('RefeicaoService', () => {
  let service: RefeicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RefeicaoService],
    }).compile();

    service = module.get<RefeicaoService>(RefeicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
