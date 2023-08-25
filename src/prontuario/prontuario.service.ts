import { Injectable } from '@nestjs/common';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';
import { UpdateProntuarioDto } from './dto/update-prontuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProntuarioService {
  constructor(private prisma: PrismaService) {}

  async validacaoID(id: number) {
    const sqlValidacaoId = `select * from tbl_prontuario where id =${id};`;
    const resultValidacaoId: [] = await this.prisma.$queryRawUnsafe(
      sqlValidacaoId,
    );

    if (resultValidacaoId.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async create(body: CreateProntuarioDto) {
    const sql = `insert into tbl_prontuario (descricao, id_consulta)values('${body.descricao}', ${body.id_consulta});`;

    await this.prisma.$queryRawUnsafe(sql);

    const id = `select id from tbl_consulta order by id desc limit 1;`;

    const result = await this.prisma.$queryRawUnsafe(id);

    return result[0].id;
  }

  async findAll() {
    const sql = `select tbl_prontuario.id as id, tbl_prontuario.descricao as descricao, tbl_prontuario.id_consulta as id_consulta, date_format(tbl_consulta.dia, '%d/%m/%Y') as dia, time_format(tbl_consulta.hora,'%H:%i:0%s') as hora, tbl_consulta.id_profissional as id_profissional, tbl_consulta.id_gestante as id_gestante,
   tbl_profissional.nome as profissional, tbl_gestante.nome as gestante
   from tbl_prontuario
   inner join tbl_consulta
     on tbl_prontuario.id_consulta = tbl_consulta.id
   inner join tbl_profissional
     on tbl_profissional.id = tbl_consulta.id_profissional
   inner join tbl_gestante
     on tbl_gestante.id = tbl_consulta.id_gestante;`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findOne(id: number) {
    const sql = `select tbl_prontuario.id as id, tbl_prontuario.descricao as descricao, tbl_prontuario.id_consulta as id_consulta, date_format(tbl_consulta.dia, '%d/%m/%Y') as dia, time_format(tbl_consulta.hora,'%H:%i:0%s') as hora, tbl_consulta.id_profissional as id_profissional, tbl_consulta.id_gestante as id_gestante,
    tbl_profissional.nome as profissional, tbl_gestante.nome as gestante
    from tbl_prontuario
    inner join tbl_consulta
      on tbl_prontuario.id_consulta = tbl_consulta.id
    inner join tbl_profissional
      on tbl_profissional.id = tbl_consulta.id_profissional
    inner join tbl_gestante
      on tbl_gestante.id = tbl_consulta.id_gestante
    where tbl_prontuario.id = ${id};`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async update(id: number, body: UpdateProntuarioDto) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalid';
    }

    const sql = `update tbl_prontuario set 
    descricao = '${body.descricao}',
    id_consulta = ${body.id_consulta} 
    where id = ${id};`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async remove(id: number) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalid';
    }
    const sql = `delete from tbl_prontuario where id = ${id};`;

    return await this.prisma.$queryRawUnsafe(sql);
  }
}
