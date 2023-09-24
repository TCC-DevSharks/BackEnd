import {
  Controller,
  Get,
  Param,
  Delete,
  Query,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SugestaoNomeService } from './sugestao-nome.service';
import { CreateSugestaoNomeDto } from './dto/create-sugestao-nome.dto';

@Controller('sugestao-nome')
export class SugestaoNomeController {
  constructor(private readonly sugestaoNomeService: SugestaoNomeService) {}

  @Get()
  async findAll() {
    return { nomes: await this.sugestaoNomeService.findAll() };
  }

  @Get('sexo')
  async findOne(@Query('sexo') sexo: string) {
    return { nomes: await this.sugestaoNomeService.findOne(sexo) };
  }

  @Post('favorito')
  async addFavorite(@Body() body: CreateSugestaoNomeDto) {
    const result = await this.sugestaoNomeService.addFavorite(body);

    if (typeof result !== 'string') {
      return result;
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('favorito/:id')
  async getFavorite(@Param('id') id: number) {
    const result = await this.sugestaoNomeService.findFavorite(+id);
    return { favoritos: result };
  }

  @Delete('favorito')
  async removeFavorite(@Body() body: CreateSugestaoNomeDto) {
    const result = await this.sugestaoNomeService.remove(body);

    if (typeof result !== 'string') {
      return result;
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }
}
