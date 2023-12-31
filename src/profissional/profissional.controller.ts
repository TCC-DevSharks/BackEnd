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
import { ChatUserService } from '../chat/chatUser.service';

@Controller('profissional')
export class ProfissionalController {
  constructor(private readonly profissionalService: ProfissionalService, private readonly chatUserService: ChatUserService) {}

  @Post()
  async create(@Body() body: CreateProfissionalDto) {
    const result = await this.profissionalService.create(body);


    const corpo = {name: `${body.nome}`, usuario:`Profissional`, email: `${body.email}`, foto: `${body.foto}`}

    this.chatUserService.createUser(corpo)

    return {
      message: result[0].f0,
      id: result[0].f1,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = {
      profissionais: await this.profissionalService.findOne(+id),
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

  @Get('especialidade/:id')
  async findSpeciality(@Param('id') id: string) {
    const result = {
      profissionais: await this.profissionalService.findSpeciality(+id),
    };
    return result;
  }

  @Get('especialidade/:id/:clinic')
  async findSpecialityClinic(@Param('id') id: number, @Param('clinic')clinic: number) {
    const result = {
      profissionais: await this.profissionalService.findSpecialityClinic(+id, clinic),
    };
    return result;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: UpdateProfissionalDto) {
    const result = await this.profissionalService.update(id, body);

    if (typeof result === 'string') {
      return {
        message: result,
      };
    } else {
      throw new HttpException(`${result.message}`, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result = await this.profissionalService.remove(+id);
    return {
      message: result[0].f0,
    };
  }

  @Get('gestante/:id')
  async findPregnant(@Param('id')id: number){
    const result = await this.profissionalService.findPregnants(id);

    if (typeof result !== 'string') {
      return {
        pacientes: result,
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('consulta/:id')
  async findConsult(@Param('id')id: number){
    const result = await this.profissionalService.findConsult(id);

    if (typeof result !== 'string') {
      return {
        pacientes: result,
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }
}
