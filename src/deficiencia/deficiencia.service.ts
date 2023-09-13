import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDeficienciaDto } from './dto/create-deficiencia.dto';
import { UpdateDeficienciaDto } from './dto/update-deficiencia.dto';

@Injectable()
export class DeficienciaService {
  constructor(private prisma: PrismaService) {}

  async validacaoID(id: number) {
    const sqlValidacaoId = `select * from tbl_deficiencia where id =${id};`;
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

  async create(body: CreateDeficienciaDto) {
    const query = `insert into tbl_deficiencia(deficiencia, id_gestante) values ("${body.deficiencia}", ${body.id_gestante})`

    const result = await this.prisma.$queryRawUnsafe(query);

    return result
    
  }

  async findAll() {
    const query = `select * from tbl_deficiencia`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }

  async findGestante(id: number) {

    const valId = await this.validacaoIDGestante(id);

    if (valId == false) {

      return 'Id Invalid'
    }

    const query = `select * from tbl_deficiencia where id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }

  async findOne(id: number) {

    const valId = await this.validacaoID(id);

    if (valId == false) {
      return "Id Invalid"
    }

    const query = `select * from tbl_deficiencia where id = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }

  async update(id: number, body: UpdateDeficienciaDto) {

    const valId = await this.validacaoIDGestante(id);

    if (valId == false) {

      return 'Id Invalid'
    }

    const query = `update tbl_deficiencia set
    deficiencia = "${body.deficiencia}"
    where id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query);

    return result
  }

  async remove(id: number) {
    const valId = await this.validacaoIDGestante(id);

    if (valId == false) {
      return "Id Invalid"
    }

    const query = `delete from tbl_deficiencia where tbl_deficiencia.id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }
}
