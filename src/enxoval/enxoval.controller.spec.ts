import { Test, TestingModule } from '@nestjs/testing';
import { EnxovalController } from './enxoval.controller';
import { EnxovalService } from './enxoval.service';

describe('EnxovalController', () => {
  let controller: EnxovalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnxovalController],
      providers: [EnxovalService],
    }).compile();

    controller = module.get<EnxovalController>(EnxovalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
