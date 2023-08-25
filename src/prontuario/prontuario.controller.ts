import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';
import { UpdateProntuarioDto } from './dto/update-prontuario.dto';

@Controller('prontuario')
export class ProntuarioController {
  constructor(private readonly prontuarioService: ProntuarioService) {}

  @Post()
  async create(@Body() body: CreateProntuarioDto) {
    const result = await this.prontuarioService.create(body);

    return {
      message: 'Prontuário criado com sucesso',
      id: result,
      dados: body,
    };
  }

  @Get()
  async findAll() {
    const result = { prontuarios: await this.prontuarioService.findAll() };
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = { prontuarios: await this.prontuarioService.findOne(+id) };
    return result;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateProntuarioDto) {
    const result = await this.prontuarioService.update(+id, body);

    if (typeof result !== 'string') {
      return {
        message: 'Prontuario editado com sucesso',
        dados: body,
      };
    } else {
      throw new HttpException(`Id Invalid`, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result = await this.prontuarioService.remove(+id);

    if (typeof result !== 'string') {
      return {
        message: 'Consulta deletada com sucesso',
      };
    } else {
      throw new HttpException(`Id Invalid`, HttpStatus.NOT_FOUND);
    }
  }
}
