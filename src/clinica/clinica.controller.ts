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
  Patch,
} from '@nestjs/common';
import { ClinicaService } from './clinica.service';
import { CreateClinicaDto, UpdateProfissional } from './dto/create-clinica.dto';
import { UpdateClinicaDto } from './dto/update-clinica.dto';

@Controller('clinica')
export class ClinicaController {
  constructor(private readonly clinicaService: ClinicaService) {}

  @Post()
  async create(@Body() body: CreateClinicaDto) {
    const result = await this.clinicaService.create(body);


    return {
      message: result,
    };
  }

  @Get()
  async findAll() {
    const result = { clinicas: await this.clinicaService.findAll() };
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = { clinica: await this.clinicaService.findOne(+id) };
    return result;
  }

  @Get('especialidade/:id')
  async findSpeciality(@Param('id') id: string) {
    const result = { clinicas: await this.clinicaService.findSpeciality(+id) };
    return result;
  }
  
  @Get('profissional/:id')
  async findProfessional(@Param('id') id: string) {
    const result = { clinicas: await this.clinicaService.findProfessional(+id) };
    return result;
  }

  @Get('consulta/:id')
  async findConsult(@Param('id') id: string) {
    const result = { consultas: await this.clinicaService.findConsult(+id) };
    return result;
  }

  @Get('data/:id')
  async findQuantityPregnant(@Param('id') id: number) {
    const result = { clinica: await this.clinicaService.findQuantity(id) };
    return result;
  }

  @Put('profissional/:id')
  async updateProfissional(@Param('id') id: number, @Body() body: UpdateProfissional){
    const result = await this.clinicaService.updateProfissional(id, body)

    return {message: result}
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateClinicaDto: UpdateClinicaDto,
  ) {
    const result = await this.clinicaService.update(id, updateClinicaDto);

    if (typeof result !== 'string') {
      return {
        message: 'Clinica editada com sucesso',
        id: id,
        dados: updateClinicaDto,
      };
    } else {
      throw new HttpException(`Id Invalid`, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.clinicaService.remove(+id);

    if (typeof result !== 'string') {
      return {
        message: result[0].f0,
      };
    } else {
      throw new HttpException(`Id Invalid`, HttpStatus.NOT_FOUND);
    }
  }
}
