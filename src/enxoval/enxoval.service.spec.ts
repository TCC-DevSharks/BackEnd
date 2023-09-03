import { Test, TestingModule } from '@nestjs/testing';
import { EnxovalService } from './enxoval.service';

describe('EnxovalService', () => {
  let service: EnxovalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnxovalService],
    }).compile();

    service = module.get<EnxovalService>(EnxovalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
