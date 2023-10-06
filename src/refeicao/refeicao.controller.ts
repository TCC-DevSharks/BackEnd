import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { RefeicaoService } from './refeicao.service';
import { CreateFoodToMealDto, CreateRefeicaoDto } from './dto/create-refeicao.dto';
import { UpdateRefeicaoDto } from './dto/update-refeicao.dto';

@Controller('refeicao')
export class RefeicaoController {
  constructor(private readonly refeicaoService: RefeicaoService) {}

  @Post()
  async createMeal(@Body() body: CreateRefeicaoDto) {
    const result = await this.refeicaoService.createMeal(body);

    if (typeof result !== 'string') {
      return {message:'Refeição criada com sucesso'};
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('profissional/:id')
 async findAll(@Param('id') id: number) {
    return{refeição: await this.refeicaoService.findAllMeal(id)} 
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return{refeição: await this.refeicaoService.findOneMeal(+id)} 
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: UpdateRefeicaoDto) {
    const result = await this.refeicaoService.updateMeal(+id, body);

    if (typeof result !== 'string') {
      return {
        message: 'Refeição editada com sucesso',
      };
    } else {
      throw new HttpException(result, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result = await this.refeicaoService.removeMeal(+id);

    if (typeof result !== 'string') {
      return {
        message: 'Refeição apagada com sucesso',
      };
    } else {
      throw new HttpException(result, HttpStatus.NOT_FOUND);
    }
  }

  @Post('alimento')
  async createFoodToMeal(@Body() body: CreateFoodToMealDto) {
    const result = await this.refeicaoService.createFoodToMeal(body);

    if (typeof result !== 'string') {
      return {message:'Alimento adicionado com sucesso'};
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('alimento/:id')
  async findAllFoodMeal(@Param('id') id: number) {
    return{alimentos: await this.refeicaoService.findAllFoodMeal(+id)} 
  }

  @Delete(':idRefeicao/alimento/:idAlimento')
  async removeFoodToMeal(@Param('idRefeicao') id: number, @Param('idAlimento') idAlimento: number) {
    const result = await this.refeicaoService.removeFoodToMeal(id, idAlimento);

    if (typeof result !== 'string') {
      return {
        message: 'Alimento retirado com sucesso',
      };
    } else {
      throw new HttpException(result, HttpStatus.NOT_FOUND);
    }
  }
  @Get('lista/alimento')
  async findFood() {
    return{alimentos: await this.refeicaoService.findFood()} 
  }
}
