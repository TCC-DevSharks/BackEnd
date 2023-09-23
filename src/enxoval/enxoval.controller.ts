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
import { EnxovalService } from './enxoval.service';
import { CreateEnxovalDto } from './dto/create-enxoval.dto';
import { UpdateEnxovalDto } from './dto/update-enxoval.dto';

@Controller('enxoval')
export class EnxovalController {
  constructor(private readonly enxovalService: EnxovalService) {}

  @Get()
  async findAll() {
    return { enxoval: await this.enxovalService.findAll() };
  }

  @Get('categoria')
  async findOne(@Query('categoria') categoria: string) {
    return { exoval: await this.enxovalService.findOne(categoria) };
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
}
