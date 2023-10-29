import { Test, TestingModule } from '@nestjs/testing';
import { ChatSocketController } from './chat-socket.controller';

describe('ChatSocketController', () => {
  let controller: ChatSocketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatSocketController],
    }).compile();

    controller = module.get<ChatSocketController>(ChatSocketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
