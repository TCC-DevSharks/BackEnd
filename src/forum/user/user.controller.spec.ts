import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../mongodb/database.module';
import { PrismaService } from '../../prisma/prisma.service';
import { UserController } from './user.controller';
import { useProviders } from './user.providers';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [UserController],
      providers: [UserService, ...useProviders],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
