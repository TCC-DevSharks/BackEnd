import { Test, TestingModule } from '@nestjs/testing';
import { AppGateway } from './chat-socket.controller';

describe('ChatSocketController', () => {
  let controller: AppGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppGateway],
    }).compile();

    controller = module.get<AppGateway>(AppGateway);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
