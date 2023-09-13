import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ComorbidadeService } from './comorbidade.service';
import { CreateComorbidadeDto } from './dto/create-comorbidade.dto';
import { UpdateComorbidadeDto } from './dto/update-comorbidade.dto';

@Controller('comorbidade')
export class ComorbidadeController {
  constructor(private readonly comorbidadeService: ComorbidadeService) {}

  @Post()
  create(@Body() body: CreateComorbidadeDto) {

    const result = this.comorbidadeService.create(body);
    return {
      "comorbidade": result,
    }
  }

  @Get()
  async findAll() {
    return await this.comorbidadeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const result =  await this.comorbidadeService.findOne(+id);    

    if (typeof result !== 'string') {
      return {
        comorbidade: result,
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('gestante/:id')
  async findOneGestante(@Param('id') id: string) {
    const result =  await this.comorbidadeService.findGestante(+id);    
    if (typeof result !== 'string') {
      return {
        comorbidade: result,
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: UpdateComorbidadeDto) {
    const result =  await this.comorbidadeService.update(+id, body);    
    if (typeof result !== 'string') {
      return {
        message: "Comorbidade atualizada com sucesso",
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result =  await this.comorbidadeService.remove(+id);    
    if (typeof result !== 'string') {
      return {
        message: "Comorbidade deletada com sucesso",
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }
}
