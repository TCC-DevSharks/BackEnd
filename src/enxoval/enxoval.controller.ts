import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EnxovalService } from './enxoval.service';
import { CreateEnxovalDto } from './dto/create-enxoval.dto';
import { UpdateEnxovalDto } from './dto/update-enxoval.dto';

@Controller('enxoval')
export class EnxovalController {
  constructor(private readonly enxovalService: EnxovalService) {}

  @Get()
  async findAll() {
    return { enxoval: await this.enxovalService.findAll() };
  }

  @Get('categoria')
  async findOne(@Query('categoria') categoria: string) {
    return { exoval: await this.enxovalService.findOne(categoria) };
  }
}
