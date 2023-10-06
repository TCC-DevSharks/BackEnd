import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDietaDto } from './dto/create-dieta.dto';
import { UpdateDietaDto } from './dto/update-dieta.dto';

@Injectable()
export class DietaService {

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

  async createDieta(body: CreateDietaDto){
    const valId = await this.validacaoID(body.id_consulta)

    if (valId == false) {
      return 'Id da consulta inválido'
    }
    const sql = `insert into tbl_dieta(id_consulta)values(${body.id_consulta})`

    const result = await this.prisma.$queryRawUnsafe(sql)

    return result;
  }
  
  async findDieta(id : number){
    const sql = `select tbl_dieta.id as idDieta, tbl_profissional.nome as profissional, tbl_gestante.nome as gestante
    from tbl_dieta
      inner join tbl_consulta
        on tbl_dieta.id_consulta = tbl_consulta.id
      inner join tbl_profissional
        on tbl_consulta.id_profissional = tbl_profissional.id
      inner join tbl_gestante
        on tbl_gestante.id = tbl_consulta.id_gestante
    where tbl_consulta.id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(sql)

    return result;
  }
}
