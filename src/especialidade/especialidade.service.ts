import { Injectable } from '@nestjs/common';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';
import { PrismaService } from '../prisma/prisma.service';

interface CreateEspecialidadeParams {
  id_profissional: number;
  id_especialidade: number;
}

@Injectable()
export class EspecialidadeService {

  constructor(private prisma: PrismaService) {}
  
  async validacaoID(id: number) {
    const sqlValidacaoId = `select * from tbl_profissional_especialidade where id =${id};`;
    const resultValidacaoId: [] = await this.prisma.$queryRawUnsafe(
      sqlValidacaoId,
    );

    if (resultValidacaoId.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async create(body: CreateEspecialidadeParams) {
    const sql = `insert into tbl_profissional_especialidade(id_profissional, id_especialidade)values(${body.id_profissional}, ${body.id_especialidade});`;

    const validacao = `select * from tbl_profissional_especialidade where id_profissional = ${body.id_profissional} and id_especialidade =${body.id_especialidade}`;

    const resultValidacao: [] = await this.prisma.$queryRawUnsafe(validacao);

    if (resultValidacao.length !== 0) {
      return true;
    }

    await this.prisma.$queryRawUnsafe(sql);

    const id = `select id from tbl_agenda order by id desc limit 1;`;

    const result = await this.prisma.$queryRawUnsafe(id);
    return result[0].id;
  }

  async findAll() {
    const sql = `select * from tbl_especialidade;`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    const json = { especialidades: result };
    return json;
  }

  async findAllEspecialidadeProfissional() {
    const sql = `select * from tbl_profissional_especialidade;`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findProfissional(id: number) {
    const sql = `select * from tbl_profissional_especialidade where id_profissional = ${id};`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findEspecialidade(id: number) {
    const sql = `select * from tbl_profissional_especialidade where id_especialidade = ${id};`;

    const result = { especialidade: await this.prisma.$queryRawUnsafe(sql) };

    return result;
  }

  async update(id: number, body: UpdateEspecialidadeDto) {
    const valId = await this.validacaoID(id);

    //Valida se o Id passado é válido
    if (valId == false) {
      return {
        message: 'Id Invalid',
      };
    }

    const sql = `update tbl_profissional_especialidade set 
   id_profissional= ${body.id_profissional},
   id_especialidade = ${body.id_especialidade} where id =${id};`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async remove(id: number) {
    const valId = await this.validacaoID(id);

    //Valida se o Id passado é válido
    if (valId == false) {
      return {
        message: 'Id Invalid',
      };
    }

    const sql = `delete from tbl_profissional_especialidade where id = ${id};`;

    return await this.prisma.$queryRawUnsafe(sql);
  }
}
