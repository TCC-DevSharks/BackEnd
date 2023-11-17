import { Injectable } from '@nestjs/common';
import { CreateExercicioDto } from './dto/create-exercicio.dto';
import { UpdateExercicioDto } from './dto/update-exercicio.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExerciciosService {
  constructor(private prisma: PrismaService) {}
  create(createExercicioDto: CreateExercicioDto) {
    return 'This action adds a new exercicio';
  }

  async findAll() {
    const sql = `
    select tbl_exercicio.id as id, tbl_exercicio.nome as nome, tbl_exercicio.descricao, tbl_exercicio.video, tbl_categoria.nome as categoria
      from tbl_exercicio
        inner join tbl_categoria
          on tbl_categoria.id = tbl_exercicio.id_categoria;`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result
  }

  async findOne(id: number) {
    const sql = `
    select tbl_exercicio.id as id, tbl_exercicio.nome as nome, tbl_exercicio.descricao, tbl_exercicio.video, tbl_categoria.nome as categoria
      from tbl_exercicio
        inner join tbl_categoria
          on tbl_categoria.id = tbl_exercicio.id_categoria
    where tbl_exercicio.id = ${id}`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result
  }

  async findOneCategories(id: number) {
    const sql = `
    select tbl_exercicio.id as id, tbl_exercicio.nome as nome, tbl_exercicio.descricao, tbl_exercicio.video, tbl_categoria.nome as categoria
      from tbl_exercicio
        inner join tbl_categoria
          on tbl_categoria.id = tbl_exercicio.id_categoria
    where tbl_categoria.id = ${id}`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result
  }

  async findCategories() {
    const sql = `select * from tbl_categoria`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result
  }

}
