import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AlergiaService } from './alergia.service';
import { CreateAlergiaDto } from './dto/create-alergia.dto';
import { UpdateAlergiaDto } from './dto/update-alergia.dto';

@Controller('alergia')
export class AlergiaController {
  constructor(private readonly alergiaService: AlergiaService) {}

  @Post()
  create(@Body() body: CreateAlergiaDto) {

    const result = this.alergiaService.create(body);
    return {
      message: "Alergia adicionada com sucesso",
    }
  }

  @Get()
  async findAll() {
    return await this.alergiaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const result =  await this.alergiaService.findOne(+id);    

    if (typeof result !== 'string') {
      return {
        alergia: result,
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('gestante/:id')
  async findOneGestante(@Param('id') id: string) {
    const result =  await this.alergiaService.findGestante(+id);    
    if (typeof result !== 'string') {
      return {
        alergia: result,
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: UpdateAlergiaDto) {
    const result =  await this.alergiaService.update(+id, body);    
    if (typeof result !== 'string') {
      return {
        message: "Alergia atualizada com sucesso",
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result =  await this.alergiaService.remove(+id);    
    if (typeof result !== 'string') {
      return {
        message: "Alergia deletada com sucesso",
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }
}
