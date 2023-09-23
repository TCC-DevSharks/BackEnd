import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MalaMaternidadeService } from './mala-maternidade.service';
import { CreateMalaMaternidadeDto } from './dto/create-mala-maternidade.dto';
import { UpdateMalaMaternidadeDto } from './dto/update-mala-maternidade.dto';

@Controller('mala-maternidade')
export class MalaMaternidadeController {
  constructor(private readonly malaMaternidadeService: MalaMaternidadeService) {}

  @Post()
  create(@Body() createMalaMaternidadeDto: CreateMalaMaternidadeDto) {
    return this.malaMaternidadeService.create(createMalaMaternidadeDto);
  }

  @Get()
  findAll() {
    return this.malaMaternidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.malaMaternidadeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMalaMaternidadeDto: UpdateMalaMaternidadeDto) {
    return this.malaMaternidadeService.update(+id, updateMalaMaternidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.malaMaternidadeService.remove(+id);
  }
}
