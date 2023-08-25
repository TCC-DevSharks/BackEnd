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
import { EspecialidadeService } from './especialidade.service';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';

@Controller('especialidade')
export class EspecialidadeController {
  constructor(private readonly especialidadeService: EspecialidadeService) {}

  @Post('profissional')
  async create(@Body() body: CreateEspecialidadeDto) {
    const id = await this.especialidadeService.create(body);

    if (id === true) {
      return {
        message: 'Esse profissional já possui essa especialidade',
      };
    }
    return {
      message: 'Especialidade adicionada com sucesso',
      id: id,
      dados: body,
    };
  }

  @Get()
  findAll() {
    return this.especialidadeService.findAll();
  }

  @Get('profissional/:id')
  findProfissional(@Param('id') id: string) {
    return this.especialidadeService.findProfissional(+id);
  }

  @Get('profissional')
  findProfissionalEspecialidade(@Param('id') id: string) {
    return this.especialidadeService.findAllEspecialidadeProfissional();
  }

  @Get(':id')
  findEspecialidade(@Param('id') id: string) {
    return this.especialidadeService.findEspecialidade(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateEspecialidadeDto) {
    const result = await this.especialidadeService.update(+id, body);

    if (typeof result === 'string') {
      return {
        message: 'Evento editado com sucesso',
        dados: body,
      };
    } else {
      throw new HttpException(`Id Invalid`, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.especialidadeService.remove(+id);

    if (typeof result === 'string') {
      return {
        message: 'Deletado com sucesso',
      };
    } else {
      throw new HttpException(`Id Invalid`, HttpStatus.NOT_FOUND);
    }
  }
}
