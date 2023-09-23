import { Injectable } from '@nestjs/common';
import { CreateMalaMaternidadeDto } from './dto/create-mala-maternidade.dto';
import { UpdateMalaMaternidadeDto } from './dto/update-mala-maternidade.dto';

@Injectable()
export class MalaMaternidadeService {
  create(createMalaMaternidadeDto: CreateMalaMaternidadeDto) {
    return 'This action adds a new malaMaternidade';
  }

  findAll() {
    return `This action returns all malaMaternidade`;
  }

  findOne(id: number) {
    return `This action returns a #${id} malaMaternidade`;
  }

  update(id: number, updateMalaMaternidadeDto: UpdateMalaMaternidadeDto) {
    return `This action updates a #${id} malaMaternidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} malaMaternidade`;
  }
}
