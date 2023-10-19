import { Test, TestingModule } from '@nestjs/testing';
import { RedefinirSenhaService } from './redefinir-senha.service';

describe('RedefinirSenhaService', () => {
  let service: RedefinirSenhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedefinirSenhaService],
    }).compile();

    service = module.get<RedefinirSenhaService>(RedefinirSenhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
