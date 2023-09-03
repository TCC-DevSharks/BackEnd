import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { SugestaoNomeService } from './sugestao-nome.service';

@Controller('sugestao-nome')
export class SugestaoNomeController {
  constructor(private readonly sugestaoNomeService: SugestaoNomeService) {}

  @Get()
  async findAll() {
    return { nomes: await this.sugestaoNomeService.findAll() };
  }

  @Get('sexo')
  async findOne(@Query('sexo') sexo: string) {
    return { nomes: await this.sugestaoNomeService.findOne(sexo) };
  }
}
