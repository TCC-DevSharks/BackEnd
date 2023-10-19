import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAlergiaDto } from './dto/create-alergia.dto';
import { UpdateAlergiaDto } from './dto/update-alergia.dto';

@Injectable()
export class AlergiaService {
  constructor(private prisma: PrismaService) {}

  async validacaoID(id: number) {
    const sqlValidacaoId = `select * from tbl_alergia where id =${id};`;
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

  async create(body: CreateAlergiaDto) {
    const query = `insert into tbl_alergia(alergia, id_gestante) values ("${body.alergia}", ${body.id_gestante})`

    const result = await this.prisma.$queryRawUnsafe(query);

    return result
    
  }

  async findAll() {
    const query = `select * from tbl_alergia`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }

  async findGestante(id: number) {

    const valId = await this.validacaoIDGestante(id);

    if (valId == false) {

      return 'Id Invalid'
    }

    const query = `select * from tbl_alergia where id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }

  async findOne(id: number) {

    const valId = await this.validacaoID(id);

    if (valId == false) {
      return "Id Invalid"
    }

    const query = `select * from tbl_alergia where id = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }

  async update(id: number, body: UpdateAlergiaDto) {

    const valId = await this.validacaoIDGestante(id);

    if (valId == false) {

      return 'Id Invalid'
    }

    const query = `update tbl_alergia set
    alergia = "${body.alergia}"
    where id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query);

    return result
  }

  async remove(id: number) {
    const valId = await this.validacaoIDGestante(id);

    if (valId == false) {
      return "Id Invalid"
    }

    const query = `delete from tbl_alergia where tbl_alergia.id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }
}
