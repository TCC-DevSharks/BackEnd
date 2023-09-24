import { Test, TestingModule } from '@nestjs/testing';
import { PlanoPartoController } from './plano-parto.controller';
import { PlanoPartoService } from './plano-parto.service';

describe('PlanoPartoController', () => {
  let controller: PlanoPartoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanoPartoController],
      providers: [PlanoPartoService],
    }).compile();

    controller = module.get<PlanoPartoController>(PlanoPartoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
