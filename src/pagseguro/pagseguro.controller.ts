import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { PagseguroService } from './pagseguro.service';
import { CreatePagseguroDto, getPag } from './dto/create-pagseguro.dto';

@Controller('pagseguro')
export class PagseguroController {
  constructor(private readonly pagseguroService: PagseguroService) {}

  @Post()
  async create(@Body() body: CreatePagseguroDto) {
    console.log(body);

    return await this.pagseguroService.create(body);
  }

  @Get()
  async findAll(@Body() body: getPag) {
    return await this.pagseguroService.findAll(body);
  }
}
