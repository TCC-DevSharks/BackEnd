import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMedicacaoDto } from './dto/create-medicacao.dto';
import { UpdateMedicacaoDto } from './dto/update-medicacao.dto';

@Injectable()
export class MedicacaoService {
  constructor(private prisma: PrismaService) {}

  async validacaoID(id: number) {
    const sqlValidacaoId = `select * from tbl_medicacao where id =${id};`;
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

  async create(body: CreateMedicacaoDto) {
    const query = `insert into tbl_medicacao(medicacao, id_gestante) values ("${body.medicacao}", ${body.id_gestante})`

    const result = await this.prisma.$queryRawUnsafe(query);

    return result
    
  }

  async findAll() {
    const query = `select * from tbl_medicacao`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }

  async findGestante(id: number) {

    const valId = await this.validacaoIDGestante(id);

    if (valId == false) {

      return 'Id Invalid'
    }

    const query = `select * from tbl_medicacao where id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }

  async findOne(id: number) {

    const valId = await this.validacaoID(id);

    if (valId == false) {
      return "Id Invalid"
    }

    const query = `select * from tbl_medicacao where id = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }

  async update(id: number, body: UpdateMedicacaoDto) {

    const valId = await this.validacaoIDGestante(id);

    if (valId == false) {

      return 'Id Invalid'
    }

    const query = `update tbl_medicacao set
    medicacao = "${body.medicacao}"
    where id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query);

    return result
  }

  async remove(id: number) {
    const valId = await this.validacaoIDGestante(id);

    if (valId == false) {
      return "Id Invalid"
    }

    const query = `delete from tbl_medicacao where tbl_medicacao.id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(query)

    return result
  }
}
