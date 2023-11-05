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
import { RefeicaoService } from './refeicao.service';
import {
  CreateFoodToMealDto,
  CreateRefeicaoDto,
} from './dto/create-refeicao.dto';
import { UpdateRefeicaoDto } from './dto/update-refeicao.dto';

@Controller('refeicao')
export class RefeicaoController {
  constructor(private readonly refeicaoService: RefeicaoService) {}

  @Post()
  async createMeal(@Body() body: CreateRefeicaoDto) {
    const result = await this.refeicaoService.createMeal(body);

    if (typeof result !== 'string') {
      return { message: 'Refeição criada com sucesso' };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('profissional/:id')
  async findAll(@Param('id') id: number) {
    return { refeicao: await this.refeicaoService.findAllMeal(id) };
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return { refeicao: await this.refeicaoService.findOneMeal(+id) };
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
      return { message: 'Alimento adicionado com sucesso' };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('alimento/:id')
  async findAllFoodMeal(@Param('id') id: number) {
    return { alimentos: await this.refeicaoService.findAllFoodMeal(+id) };
  }

  @Delete(':idRefeicao/alimento/:idAlimento')
  async removeFoodToMeal(
    @Param('idRefeicao') id: number,
    @Param('idAlimento') idAlimento: number,
  ) {
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
    return { alimentos: await this.refeicaoService.findFood() };
  }

  @Get('categoria/alimento/:id')
  async findFoodByCategory(@Param('id')id: number) {
    return { alimentos: await this.refeicaoService.findFoodByCategory(+id) };
  }

  @Get('lista/categoria')
  async findCategoryFood() {
    return { categorias: await this.refeicaoService.findCategoryFood() };
  }

  //Refeição Padrão
  @Post('padrao')
  async createMealDefault(@Body() body: CreateRefeicaoDto) {
    const result = await this.refeicaoService.createMealDefault(body);

    if (typeof result !== 'string') {
      return { message: 'Refeição Padrão criada com sucesso' };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('padrao/profissional/:id')
  async findAllDefault(@Param('id') id: number) {
    return { refeicao: await this.refeicaoService.findAllMealDefault(id) };
  }

  @Get('padrao/:id')
  async findOneDefault(@Param('id') id: number) {
    return { refeicao: await this.refeicaoService.findOneMealDefault(+id) };
  }

  @Patch('padrao/:id')
  async updateDefault(@Param('id') id: number, @Body() body: UpdateRefeicaoDto) {
    const result = await this.refeicaoService.updateMealDefault(+id, body);

    if (typeof result !== 'string') {
      return {
        message: 'Refeição Padrão editada com sucesso',
      };
    } else {
      throw new HttpException(result, HttpStatus.NOT_FOUND);
    }
  }

  @Delete('padrao/:id')
  async removeDefault(@Param('id') id: number) {
    const result = await this.refeicaoService.removeMealDefault(id);

    if (typeof result !== 'string') {
      return {
        message: 'Refeição apagada com sucesso',
      };
    } else {
      throw new HttpException(result, HttpStatus.NOT_FOUND);
    }
  }

  @Post('padrao/alimento')
  async createFoodToMealDefault(@Body() body: CreateFoodToMealDto) {
    const result = await this.refeicaoService.createFoodToMealDefault(body);

    if (typeof result !== 'string') {
      return { message: 'Alimento adicionado com sucesso' };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('padrao/alimento/:id')
  async findAllFoodMealDefault(@Param('id') id: number) {
    return { alimentos: await this.refeicaoService.findAllFoodMealDefault(+id) };
  }

  @Delete('padrao/:idRefeicao/alimento/:idAlimento')
  async removeFoodToMealDefault(
    @Param('idRefeicao') id: number,
    @Param('idAlimento') idAlimento: number,
  ) {
    const result = await this.refeicaoService.removeFoodToMealDefault(id, idAlimento);

    if (typeof result !== 'string') {
      return {
        message: 'Alimento retirado com sucesso',
      };
    } else {
      throw new HttpException(result, HttpStatus.NOT_FOUND);
    }
  }
}
