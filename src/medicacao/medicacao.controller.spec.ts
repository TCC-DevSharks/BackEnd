import { Test, TestingModule } from '@nestjs/testing';
import { MedicacaoController } from './medicacao.controller';
import { MedicacaoService } from './medicacao.service';

describe('MedicacaoController', () => {
  let controller: MedicacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicacaoController],
      providers: [MedicacaoService],
    }).compile();

    controller = module.get<MedicacaoController>(MedicacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
