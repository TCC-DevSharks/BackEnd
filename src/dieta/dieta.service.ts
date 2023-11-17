import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDietaDto, CreateMealDto } from './dto/create-dieta.dto';
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

  async validationIdMeal(id: number) {
    const query = `select * from tbl_refeicao where id = ${id}`;

    const result: [] = await this.prisma.$queryRawUnsafe(query);

    if (result.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  async validationIdDieta(id: number) {
    const query = `select * from tbl_dieta where id = ${id}`;

    const result: [] = await this.prisma.$queryRawUnsafe(query);

    if (result.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  async createDieta(body: CreateDietaDto) {
    const valId = await this.validacaoID(body.id_consulta);

    if (valId == false) {
      return 'Id da consulta inválido';
    }
    const sql = `insert into tbl_dieta(id_consulta)values(${body.id_consulta})`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findDieta(id: number) {
    const sql = `select tbl_dieta.id as idDieta,tbl_gestante.nome as gestante, tbl_refeicao.nome as refeicao, tbl_refeicao.id as idRefeicao, 
    time_format(tbl_dieta_refeicao.horario,'%H:%i') as horario
    from tbl_dieta
      inner join tbl_consulta
        on tbl_dieta.id_consulta = tbl_consulta.id
      inner join tbl_profissional
        on tbl_consulta.id_profissional = tbl_profissional.id
      inner join tbl_gestante
        on tbl_gestante.id = tbl_consulta.id_gestante
      inner join tbl_dieta_refeicao
        on tbl_dieta_refeicao.id_dieta = tbl_dieta.id
      inner join tbl_refeicao
        on tbl_dieta_refeicao.id_refeicao = tbl_refeicao.id
    where tbl_consulta.id_gestante = ${id}
    order by tbl_dieta_refeicao.horario asc`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }


  async findDietaName(id: number) {

    const sql = `select tbl_dieta.id as idDieta, tbl_gestante.nome as gestante
                from tbl_dieta 
                  inner join tbl_consulta
                    on tbl_consulta.id = tbl_dieta.id_consulta
                  inner join tbl_gestante
                    on tbl_gestante.id = tbl_consulta.id_gestante
                    where tbl_consulta.id_gestante = ${id}`

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async createMealToDieta(body: CreateMealDto) {
    const valDieta = await this.validationIdDieta(body.id_dieta);

    if (valDieta == false) {
      return 'Id refeição Invalido';
    }

    const sql = `call procMealToDiet("${body.nome}",${body.id_profissional},${body.id_gestante},${body.id_dieta},"${body.horario}")`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findMealCategory(id: number) {
    const sql = `select tbl_alimento.id as id,
    tbl_alimento.nome as nome,
    tbl_alimento.imagem as imagem,
    tbl_alimento.peso as peso,
    tbl_categoriaAlimento.nome as categoria
    from tbl_alimento
      inner join tbl_categoriaAlimento
        on tbl_alimento.id_categoria = tbl_categoriaAlimento.id
        where tbl_categoriaAlimento.id = ${id}`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async deleteDietMeal(id: number){
    const sql = `call procDeleteMealToDiet(${id});`

    const result = await this.prisma.$queryRawUnsafe(sql)

    return result
  }
}
