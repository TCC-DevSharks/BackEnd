import { Injectable } from '@nestjs/common';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConsultaService {
  constructor(private prisma: PrismaService) {}

  async validacaoID(id: number) {
    const sqlValidacaoId = `select * from tbl_consulta where id =${id};`;
    const resultValidacaoId: [] = await this.prisma.$queryRawUnsafe(
      sqlValidacaoId,
    );

    if (resultValidacaoId.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async create(body: CreateConsultaDto) {
    const sql = `insert into tbl_consulta(dia, hora, id_profissional, id_gestante) values (
      '${body.dia}', '${body.hora}',${body.id_profissional}, ${body.id_gestante}
    );`;

    await this.prisma.$queryRawUnsafe(sql);

    const id = `select id from tbl_consulta order by id desc limit 1;`;

    const result = await this.prisma.$queryRawUnsafe(id);

    return result[0].id;
  }

  async findAll() {
    const sql = `    select 
    tbl_consulta.id as id, date_format(tbl_consulta.dia, '%d/%m/%Y') as dia, time_format(tbl_consulta.hora,'%H:%i:0%s') as hora, tbl_consulta.id_profissional as id_profissional, tbl_consulta.id_gestante as id_gestante,
    tbl_profissional.nome as profissional, tbl_gestante.nome as gestante
    from tbl_consulta
		inner join tbl_profissional
			on tbl_profissional.id = tbl_consulta.id_profissional
		inner join tbl_gestante
			on tbl_gestante.id = tbl_consulta.id_gestante;`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findOne(id: number) {
    const sql = `    select 
    tbl_consulta.id as id, date_format(tbl_consulta.dia, '%d/%m/%Y') as dia, time_format(tbl_consulta.hora,'%H:%i:0%s') as hora, tbl_consulta.id_profissional as id_profissional, tbl_consulta.id_gestante as id_gestante,
    tbl_profissional.nome as profissional, tbl_gestante.nome as gestante
    from tbl_consulta
		inner join tbl_profissional
			on tbl_profissional.id = tbl_consulta.id_profissional
		inner join tbl_gestante
			on tbl_gestante.id = tbl_consulta.id_gestante
    where tbl_consulta.id = ${id}
    order by id asc;`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async update(id: number, body: UpdateConsultaDto) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalid';
    }

    const sql = `update tbl_consulta set 
    dia = '${body.dia}',
    hora = '${body.hora}',
    id_profissional = ${body.id_profissional},
    id_gestante = ${body.id_gestante} 
    where id = ${id};`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async remove(id: number) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalid';
    }
    const sql = `delete from tbl_consulta where id = ${id};`;

    return await this.prisma.$queryRawUnsafe(sql);
  }
}
