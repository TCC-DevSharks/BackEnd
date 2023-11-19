import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-categoria.dto';

@Controller('forum/categoria')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() categoryUserDto: CreateCategoryDto) {
    
    return await this.categoryService.create(categoryUserDto);
  }

  @Get()
  async findAll() {
    return {categorys: await this.categoryService.findAll()}
  }

}
