import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Post()
  async create(@Body() body: CreateConsultaDto) {
    const result = await this.consultaService.create(body);

    if (typeof result !== 'string') {
      return result;
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get()
  async findAll() {
    const result = { consultas: await this.consultaService.findAll() };
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = { consulta: await this.consultaService.findOne(+id) };
    return result;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateConsultaDto) {
    const result = await this.consultaService.update(+id, body);

    if (typeof result !== 'string') {
      return {
        message: 'Consulta editada com sucesso',
        dados: body,
      };
    } else {
      throw new HttpException(`Id Invalid`, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result = await this.consultaService.remove(+id);

    if (typeof result !== 'string') {
      return {
        message: 'Prontuario deletado com sucesso',
      };
    } else {
      throw new HttpException(`Id Invalid`, HttpStatus.NOT_FOUND);
    }
  }
}
