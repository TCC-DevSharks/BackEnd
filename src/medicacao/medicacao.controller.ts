import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { MedicacaoService } from './medicacao.service';
import { CreateMedicacaoDto } from './dto/create-medicacao.dto';
import { UpdateMedicacaoDto } from './dto/update-medicacao.dto';

@Controller('medicacao')
export class MedicacaoController {
  constructor(private readonly medicacaoService: MedicacaoService) {}

  @Post()
  create(@Body() body: CreateMedicacaoDto) {

    const result = this.medicacaoService.create(body);
    return {
      message: "Medicação adicionada com sucesso",
    }
  }

  @Get()
  async findAll() {
    return await this.medicacaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const result =  await this.medicacaoService.findOne(+id);    

    if (typeof result !== 'string') {
      return {
        medicação: result,
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Get('gestante/:id')
  async findOneGestante(@Param('id') id: string) {
    const result =  await this.medicacaoService.findGestante(+id);    
    if (typeof result !== 'string') {
      return {
        medicacao: result,
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: UpdateMedicacaoDto) {
    const result =  await this.medicacaoService.update(+id, body);    
    if (typeof result !== 'string') {
      return {
        message: "Medicação atualizada com sucesso",
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result =  await this.medicacaoService.remove(+id);    
    if (typeof result !== 'string') {
      return {
      message: "Medicação deletada com sucesso",
      };
    } else {
      throw new HttpException(`${result}`, HttpStatus.NOT_FOUND);
    }
  }
}
