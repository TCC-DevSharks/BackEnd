import { Test, TestingModule } from '@nestjs/testing';
import { AlergiaController } from './alergia.controller';
import { AlergiaService } from './alergia.service';

describe('AlergiaController', () => {
  let controller: AlergiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlergiaController],
      providers: [AlergiaService],
    }).compile();

    controller = module.get<AlergiaController>(AlergiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
