import { Test, TestingModule } from '@nestjs/testing';
import { RedefinirSenhaController } from './redefinir-senha.controller';
import { RedefinirSenhaService } from './redefinir-senha.service';

describe('RedefinirSenhaController', () => {
  let controller: RedefinirSenhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedefinirSenhaController],
      providers: [RedefinirSenhaService],
    }).compile();

    controller = module.get<RedefinirSenhaController>(RedefinirSenhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
