import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { DietaService } from './dieta.service';
import { CreateMealDto } from './dto/create-dieta.dto';
import { UpdateMealDto } from './dto/update-dieta.dto';

@Controller('dieta')
export class DietaController {
  constructor(private readonly dietaService: DietaService) {}

  @Post('refeicao')
  async createMeal(@Body() body: CreateMealDto) {
    const result = await this.dietaService.createMeal(body);

    if (typeof result !== 'string') {
      return {message:'Refeição criada com sucesso'};
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('refeicao/profissional/:id')
 async findAll(@Param('id') id: number) {
    return{refeição: await this.dietaService.findAllMeal(id)} 
  }

  @Get('refeicao/:id')
  async findOne(@Param('id') id: number) {
    return{refeição: await this.dietaService.findOneMeal(+id)} 
  }

  @Patch('refeicao/:id')
  async update(@Param('id') id: number, @Body() body: UpdateMealDto) {
    const result = await this.dietaService.updateMeal(+id, body);

    if (typeof result !== 'string') {
      return {
        message: 'Refeição editada com sucesso',
      };
    } else {
      throw new HttpException(result, HttpStatus.NOT_FOUND);
    }
  }

  @Delete('refeicao/:id')
  async remove(@Param('id') id: number) {
    const result = await this.dietaService.removeMeal(+id);

    if (typeof result !== 'string') {
      return {
        message: 'Refeição apagada com sucesso',
      };
    } else {
      throw new HttpException(result, HttpStatus.NOT_FOUND);
    }
  }

  @Post('refeicao/alimento')
  async createFoodToMeal(@Body() body: CreateMealDto) {
    const result = await this.dietaService.createMeal(body);

    if (typeof result !== 'string') {
      return {message:'Alimento adicionado com sucesso'};
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('refeicao/alimento/:id')
  async findAllFoodMeal(@Param('id') id: number) {
    return{alimentos: await this.dietaService.findAllFoodMeal(+id)} 
  }

  @Delete('refeicao/:idRefeicao/alimento/:idAlimento')
  async removeFoodToMeal(@Param('idRefeicao') id: number, @Param('idAlimento') idAlimento: number) {
    const result = await this.dietaService.removeFoodToMeal(id, idAlimento);

    if (typeof result !== 'string') {
      return {
        message: 'Alimento retirado com sucesso',
      };
    } else {
      throw new HttpException(result, HttpStatus.NOT_FOUND);
    }
  }
}
