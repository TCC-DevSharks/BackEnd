import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciciosService } from './exercicios.service';
import { CreateExercicioDto } from './dto/create-exercicio.dto';
import { UpdateExercicioDto } from './dto/update-exercicio.dto';

@Controller('exercicios')
export class ExerciciosController {
  constructor(private readonly exerciciosService: ExerciciosService) {}

  @Post()
  create(@Body() createExercicioDto: CreateExercicioDto) {
    return this.exerciciosService.create(createExercicioDto);
  }

  @Get()
  async findAll() {
    return {
      exercicios: await this.exerciciosService.findAll(),
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return {
      exercicio: await this.exerciciosService.findOne(+id),
    }
  }

  @Get('categorias/todos')
  async findCategoria() {
    return {
      categorias: await this.exerciciosService.findCategories(),
    }
  }

}
