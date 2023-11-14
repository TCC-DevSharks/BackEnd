import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { PagseguroService } from './pagseguro.service';
import { CreatePagseguroDto, getPag } from './dto/create-pagseguro.dto';

@Controller('pagamento')
export class PagseguroController {
  constructor(private readonly pagseguroService: PagseguroService) {}

  @Post()
  async create(@Body() body: CreatePagseguroDto) {
    return await this.pagseguroService.create(body);
  }

  @Post('dados')
  async findOne(@Body() body: getPag) {
    return await this.pagseguroService.findOne(body);
  }

  @Get()
  async findAll(@Query('idGestante') idGestante: number) {
    return await this.pagseguroService.findAll(idGestante);
  }
}
