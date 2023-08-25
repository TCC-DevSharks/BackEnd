import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { GestanteService } from './gestante.service';
import { CreateGestanteDto } from './dto/create-gestante.dto';
import { UpdateGestanteDto } from './dto/update-gestante.dto';

@Controller('gestante')
export class GestanteController {
  constructor(private readonly gestanteService: GestanteService) {}

  @Post()
  async create(@Body() body: CreateGestanteDto) {
    const validacaoEmail = await this.gestanteService.validacaoEmail(body);

    if (validacaoEmail.length === 0) {
      const result = await this.gestanteService.create(body);

      return {
        message: 'Pregnant created successfully',
        id: result,
        dados: body,
      };
    } else {
      throw new HttpException(
        'Já existe um usuário cadastrado com este email',
        HttpStatus.CONFLICT,
      );
    }
  }

  @Get()
  async findAll() {
    const result = { gestantes: await this.gestanteService.findAll() };
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = { gestante: await this.gestanteService.findOne(+id) };
    return result;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateGestanteDto: UpdateGestanteDto,
  ) {
    const result = await this.gestanteService.update(id, updateGestanteDto);

    if (typeof result === 'string') {
      return {
        message: result,
        id: id,
        dados: updateGestanteDto,
      };
    } else {
      throw new HttpException(`${result.message}`, HttpStatus.NOT_FOUND);
    }
  }

  @Put('endereco/:id')
  async insertEndereco(
    @Param('id') id: number,
    @Body() updateGestanteDto: UpdateGestanteDto,
  ) {
    const result = await this.gestanteService.insertEndress(
      id,
      updateGestanteDto,
    );

    if (typeof result === 'string') {
      return {
        message: result,
        id: id,
        dados: updateGestanteDto,
      };
    } else {
      throw new HttpException(`${result.message}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('endereco/:id')
  async findEndress(@Param('id') id: string) {
    const result = { endereco: await this.gestanteService.findEndress(+id) };
    return result;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.gestanteService.remove(+id);

    return {
      message: result[0].f0,
    };
  }
}
