import { Test, TestingModule } from '@nestjs/testing';
import { MalaMaternidadeController } from './mala-maternidade.controller';
import { MalaMaternidadeService } from './mala-maternidade.service';

describe('MalaMaternidadeController', () => {
  let controller: MalaMaternidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MalaMaternidadeController],
      providers: [MalaMaternidadeService],
    }).compile();

    controller = module.get<MalaMaternidadeController>(MalaMaternidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
