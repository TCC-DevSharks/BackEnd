import { Test, TestingModule } from '@nestjs/testing';
import { MalaMaternidadeService } from './mala-maternidade.service';

describe('MalaMaternidadeService', () => {
  let service: MalaMaternidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MalaMaternidadeService],
    }).compile();

    service = module.get<MalaMaternidadeService>(MalaMaternidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
