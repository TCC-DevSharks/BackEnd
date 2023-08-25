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
import { ProfissionalService } from './profissional.service';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';

@Controller('profissional')
export class ProfissionalController {
  constructor(private readonly profissionalService: ProfissionalService) {}

  @Post()
  async create(@Body() body: CreateProfissionalDto) {
    const result = await this.profissionalService.create(body);

    return {
      message: 'Profissional cadastrado com sucesso',
      id: result,
      dados: body,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = {
      profissional: await this.profissionalService.findOne(+id),
    };
    return result;
  }

  @Get()
  async findAll() {
    const result = {
      profissional: await this.profissionalService.findAll(),
    };
    return result;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: UpdateProfissionalDto) {
    const result = await this.profissionalService.update(id, body);

    if (typeof result === 'string') {
      return {
        message: result,
        id: id,
        dados: body,
      };
    } else {
      throw new HttpException(`${result.message}`, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.profissionalService.remove(+id);
    return {
      message: result[0].f0,
    };
  }
}
