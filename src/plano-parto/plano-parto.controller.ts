import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PlanoPartoService } from './plano-parto.service';
import { CreatePlanoPartoDto } from './dto/create-plano-parto.dto';
import { UpdatePlanoPartoDto } from './dto/update-plano-parto.dto';

@Controller('plano-parto')
export class PlanoPartoController {
  constructor(private readonly planoPartoService: PlanoPartoService) {}

  @Get()
  findAll() {
    return this.planoPartoService.findAll();
  }

  @Get('categoria')
  async findOne(@Query('categoria') categoria: string) {
    return { planos: await this.planoPartoService.findOne(categoria) };
  }

  @Post('favorito')
  async addFavorite(@Body() body: CreatePlanoPartoDto) {
    const result = await this.planoPartoService.addFavorite(body);

    if (typeof result !== 'string') {
      return result;
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('favorito/:id')
  async getFavorite(@Param('id') id: number) {
    const result = await this.planoPartoService.findFavorite(+id);
    return { favoritos: result };
  }

  @Delete('favorito')
  async removeFavorite(
    @Query('idPlano') idPlano: number,
  @Query('idGestante') idGestante: number) {
    const result = await this.planoPartoService.remove(idPlano,idGestante);

    if (typeof result !== 'string') {
      return result;
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }
}
