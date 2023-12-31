import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  HttpStatus,
  HttpException,
  Delete,
} from '@nestjs/common';
import { EnxovalService } from './enxoval.service';
import { CreateEnxovalDto } from './dto/create-enxoval.dto';

@Controller('enxoval')
export class EnxovalController {
  constructor(private readonly enxovalService: EnxovalService) {}

  @Get()
  async findAll() {
    return { enxoval: await this.enxovalService.findAll() };
  }

  @Get('categoria')
  async findOne(@Query('categoria') categoria: string) {
    return { enxoval: await this.enxovalService.findOne(categoria) };
  }

  @Post('favorito')
  async addFavorite(@Body() body: CreateEnxovalDto) {
    const result = await this.enxovalService.addFavorite(body);

    if (typeof result !== 'string') {
      return result;
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('favorito/:id')
  async getFavorite(@Param('id') id: number) {
    const result = await this.enxovalService.findFavorite(+id);
    return { favoritos: result };
  }

  @Delete('favorito')
  async removeFavorite(
  @Query('idEnxoval') idEnxoval: number,
  @Query('idGestante') idGestante: number) {
    const result = await this.enxovalService.remove(idEnxoval,idGestante);

    if (typeof result !== 'string') {
      return result;
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }
}
