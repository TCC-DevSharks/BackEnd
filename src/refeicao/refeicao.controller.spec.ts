import { Test, TestingModule } from '@nestjs/testing';
import { RefeicaoController } from './refeicao.controller';
import { RefeicaoService } from './refeicao.service';

describe('RefeicaoController', () => {
  let controller: RefeicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefeicaoController],
      providers: [RefeicaoService],
    }).compile();

    controller = module.get<RefeicaoController>(RefeicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
