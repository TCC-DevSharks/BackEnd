import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../mongodb/database.module';
import { PrismaService } from '../../prisma/prisma.service';
import { CategoryController } from './category.controller';
import { categoryProviders } from './category.providers';
import { CategoryService } from './category.service';

describe('UserController', () => {
  let controller: CategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [CategoryController],
      providers: [CategoryService, ...categoryProviders],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
