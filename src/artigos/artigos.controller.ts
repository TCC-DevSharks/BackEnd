import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtigosService } from './artigos.service';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { UpdateArtigoDto } from './dto/update-artigo.dto';

@Controller('artigos')
export class ArtigosController {
  constructor(private readonly artigosService: ArtigosService) {}

  @Post()
  create(@Body() createArtigoDto: CreateArtigoDto) {
    return this.artigosService.create(createArtigoDto);
  }

  @Get()
  findAll() {
    return this.artigosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artigosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArtigoDto: UpdateArtigoDto) {
    return this.artigosService.update(+id, updateArtigoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artigosService.remove(+id);
  }
}
