import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-categoria.dto';
import { UpdateCategoryDto } from './dto/update-categoria.dto';

@Controller('forum/categoria')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() categoryUserDto: CreateCategoryDto) {

    console.log(categoryUserDto);
    
    return this.categoryService.create(categoryUserDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

}
