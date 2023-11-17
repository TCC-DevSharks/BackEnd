import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateComorbidadeDto } from './dto/create-comorbidade.dto';
import { UpdateComorbidadeDto } from './dto/update-comorbidade.dto';

@Injectable()
export class ComorbidadeService {
  constructor(private prisma: PrismaService) {}

  async validacaoID(id: number) {
    const sqlValidacaoId = `select * from tbl_comorbidade where id =${id};`;
    const resultValidacaoId: [] = await this.prisma.$queryRawUnsafe(
      sqlValidacaoId,
    );

    if (resultValidacaoId.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async validacaoIDGestante(id: number) {
    const sqlValidacaoId = `select * from tbl_gestante where id =${id};`;
    const resultValidacaoId: [] = await this.prisma.$queryRawUnsafe(
      sqlValidacaoId,
    );

    if (resultValidacaoId.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async create(body: CreateComorbidadeDto) {
    const query = `insert into tbl_comorbidade(comorbidade, id_gestante) values ("${body.comorbidade}", ${body.id_gestante})`

    const result = await this.prisma.$queryRawUnsafe(query);

    return result
    
  }

  async findAll() {
    const query = `select * from tbl_comorbidade`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }

  async findGestante(id: number) {

    const valId = await this.validacaoIDGestante(id);

    if (valId == false) {

      return 'Id Invalid'
    }

    const query = `select * from tbl_comorbidade where id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }

  async findOne(id: number) {

    const valId = await this.validacaoID(id);

    if (valId == false) {
      return "Id Invalid"
    }

    const query = `select * from tbl_comorbidade where id = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }

  async update(id: number, body: UpdateComorbidadeDto) {

    const valId = await this.validacaoIDGestante(id);

    if (valId == false) {

      return 'Id Invalid'
    }

    const query = `update tbl_comorbidade set
    comorbidade = "${body.comorbidade}"
    where id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query);

    return result
  }

  async remove(id: number) {
    const valId = await this.validacaoIDGestante(id);

    if (valId == false) {
      return "Id Invalid"
    }

    const query = `delete from tbl_comorbidade where tbl_comorbidade.id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }
}
