import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { DeficienciaService } from './deficiencia.service';
import { CreateDeficienciaDto } from './dto/create-deficiencia.dto';
import { UpdateDeficienciaDto } from './dto/update-deficiencia.dto';

@Controller('deficiencia')
export class DeficienciaController {
  constructor(private readonly deficienciaService: DeficienciaService) {}

  @Post()
  create(@Body() body: CreateDeficienciaDto) {

    const result = this.deficienciaService.create(body);
    return {
      message: "Deficiencia adicionada com sucesso",
    }
  }

  @Get()
  async findAll() {
    return await this.deficienciaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const result =  await this.deficienciaService.findOne(+id);    

    if (typeof result !== 'string') {
      return {
        deficiencia: result,
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('gestante/:id')
  async findOneGestante(@Param('id') id: string) {
    const result =  await this.deficienciaService.findGestante(+id);    
    if (typeof result !== 'string') {
      return {
        deficiencia: result,
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: UpdateDeficienciaDto) {
    const result =  await this.deficienciaService.update(+id, body);    
    if (typeof result !== 'string') {
      return {
        message: "Deficiencia atualizada com sucesso",
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result =  await this.deficienciaService.remove(+id);    
    if (typeof result !== 'string') {
      return {
        message: "Deficiencia deletada com sucesso",
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }
}
