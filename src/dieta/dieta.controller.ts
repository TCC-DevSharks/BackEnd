import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DietaService } from './dieta.service';
import { CreateDietaDto, CreateMealDto } from './dto/create-dieta.dto';

@Controller('dieta')
export class DietaController {
  constructor(private readonly dietaService: DietaService) {}

  @Post()
  async createDieta(@Body() body: CreateDietaDto) {
    const result = await this.dietaService.createDieta(body);

    if (typeof result !== 'string') {
      return { message: 'Dieta criada com sucesso' };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return { dieta: await this.dietaService.findDieta(+id) };
  }

  @Post('refeicao')
  async createMealToDieta(@Body() body: CreateMealDto) {
    const result = await this.dietaService.createMealToDieta(body);

    if (typeof result !== 'string') {
      return { message: 'Refeição adicionada com sucesso' };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }
}
