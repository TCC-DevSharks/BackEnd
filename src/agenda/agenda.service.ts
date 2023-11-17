import { Injectable } from '@nestjs/common';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { PrismaService } from '../prisma/prisma.service';

interface CreateAgendaParams {
  id?: number;
  dia: string;
  titulo: string;
  lembrete: boolean;
  descricao: string;
  id_gestante: number;
}

@Injectable()
export class AgendaService {
  constructor(private prisma: PrismaService) {}

  async validacaoID(id: number) {
    const sqlValidacaoId = `select * from tbl_agenda where id =${id};`;
    const resultValidacaoId: [] = await this.prisma.$queryRawUnsafe(
      sqlValidacaoId,
    );

    if (resultValidacaoId.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async create(body: CreateAgendaParams) {
    const sql = `insert into tbl_agenda (dia, titulo, lembrete, descricao, id_gestante) values(
      '${body.dia}','${body.titulo}',${body.lembrete},'${body.descricao}',${body.id_gestante}
    );`;

    await this.prisma.$queryRawUnsafe(sql);

    const id = `select id from tbl_agenda order by id desc limit 1;`;

    const result = await this.prisma.$queryRawUnsafe(id);

    return result[0].id;
  }

  async findAll() {
    const sql = `select tbl_agenda.id as id,
    date_format(tbl_agenda.dia, '%d/%m/%Y') as dia,
    tbl_agenda.titulo as titulo,
    tbl_agenda.lembrete as lembrete,
    tbl_agenda.descricao as descricao,
    tbl_agenda.id_gestante as IdGestante 
    from tbl_agenda order by id asc;`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findOne(id: number) {
    const sql = `select tbl_agenda.id as id,
    date_format(tbl_agenda.dia, '%d/%m/%Y') as dia,
    tbl_agenda.titulo as titulo,
    tbl_agenda.lembrete as lembrete,
    tbl_agenda.descricao as descricao, 
    tbl_agenda.id_gestante as IdGestante 
    from tbl_agenda where tbl_agenda.id_gestante = ${id}`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async update(id: number, body: UpdateAgendaDto) {
    const valId = await this.validacaoID(id);

    //Valida se o Id passado é válido
    if (valId == false) {
      return 'Id invalid';
    }

    const sql = `update tbl_agenda set
    tbl_agenda.dia = '${body.dia}',
    tbl_agenda.titulo = '${body.titulo}',
    tbl_agenda.lembrete = ${body.lembrete},
    tbl_agenda.descricao = '${body.descricao}',
    tbl_agenda.id_gestante = ${body.id_gestante}
    where tbl_agenda.id = ${id};`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async remove(id: number) {
    const valId = await this.validacaoID(id);

    //Valida se o Id passado é válido
    if (valId == false) {
      return 'Id Invalid';
    }
    const sql = `delete from tbl_agenda where tbl_agenda.id = ${id}`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }
}
