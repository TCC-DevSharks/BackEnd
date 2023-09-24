import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { MalaMaternidadeService } from './mala-maternidade.service';
import { CreateMalaMaternidadeDto } from './dto/create-mala-maternidade.dto';
import { UpdateMalaMaternidadeDto } from './dto/update-mala-maternidade.dto';

@Controller('mala-maternidade')
export class MalaMaternidadeController {
  constructor(
    private readonly malaMaternidadeService: MalaMaternidadeService,
  ) {}

  @Get()
  findAll() {
    return this.malaMaternidadeService.findAll();
  }

  @Post('favorito')
  async addFavorite(@Body() body: CreateMalaMaternidadeDto) {
    const result = await this.malaMaternidadeService.addFavorite(body);

    if (typeof result !== 'string') {
      return result;
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('favorito/:id')
  async getFavorite(@Param('id') id: number) {
    const result = await this.malaMaternidadeService.findFavorite(+id);
    return { favoritos: result };
  }

  @Delete('favorito')
  async removeFavorite(@Body() body: CreateMalaMaternidadeDto) {
    const result = await this.malaMaternidadeService.remove(body);

    if (typeof result !== 'string') {
      return result;
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }
}
