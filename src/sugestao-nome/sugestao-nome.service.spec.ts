import { Test, TestingModule } from '@nestjs/testing';
import { SugestaoNomeService } from './sugestao-nome.service';

describe('SugestaoNomeService', () => {
  let service: SugestaoNomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SugestaoNomeService],
    }).compile();

    service = module.get<SugestaoNomeService>(SugestaoNomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
