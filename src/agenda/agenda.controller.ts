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
import { AgendaService } from './agenda.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';

@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Post()
  async create(@Body() body: CreateAgendaDto) {
    const result = await this.agendaService.create(body);

    return {
      message: 'Registro criado na agenda',
      id: result,
      dados: body,
    };
  }

  @Get()
  async findAll() {
    const result = { eventos: await this.agendaService.findAll() };
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = { evento: await this.agendaService.findOne(+id) };
    return result;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateAgendaDto) {
    const result = await this.agendaService.update(+id, body);
    console.log(result);

    if (typeof result !== 'string') {
      return {
        message: 'Evento editado com sucesso',
        dados: body,
      };
    } else {
      throw new HttpException(result, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.agendaService.remove(+id);

    if (typeof result !== 'string') {
      return {
        message: 'Evento deletado com sucesso',
      };
    } else {
      throw new HttpException(result, HttpStatus.NOT_FOUND);
    }
  }
}
