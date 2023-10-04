import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFoodToMealDto, CreateMealDto } from './dto/create-dieta.dto';
import { UpdateMealDto } from './dto/update-dieta.dto';

@Injectable()
export class DietaService {

  constructor(private prisma: PrismaService) {}

  async validationIdProfissional(id: number) {
    const query = `select * from tbl_profissional where id = ${id}`;

    const result: [] = await this.prisma.$queryRawUnsafe(query);

    if (result.length == 0) {
      return false;
    } else {
      return true;
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

  async validacaoID(id: number) {
    const sqlValidacaoId = `select * from tbl_refeicao where id =${id};`;
    const resultValidacaoId: [] = await this.prisma.$queryRawUnsafe(
      sqlValidacaoId,
    );

    if (resultValidacaoId.length !== 0) {
      return true;
    } else {
      return false;
    }
  }
  
  async createMeal(body: CreateMealDto) {

    const idProfissional = await this.validationIdProfissional(
      body.id_profissional,
    );
      if (idProfissional == true) {
        const sql = `insert into tbl_refeicao(nome, id_profissional)values("${body.nome}", ${body.id_profissional})`

        const result = await this.prisma.$queryRawUnsafe(sql);

        return result
  
      } else {
        return 'Id Profissional invalido';
      }
    }

  async findAllMeal(id: number) {
    const sql = `select * from tbl_refeicao where id_profissional = ${id}`

    const result = await this.prisma.$queryRawUnsafe(sql)

    return result;
  }

  async findOneMeal(id: number) {
    const sql = `select * from tbl_refeicao where id = ${id}`

    const result = await this.prisma.$queryRawUnsafe(sql)

    return result;
  }

  async updateMeal(id: number, body: UpdateMealDto) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalido';
    }
     
    const sql = `update tbl_refeicao set nome = "${body.nome}" where id = ${id}`

    const result = await this.prisma.$queryRawUnsafe(sql)

    return result;

  }

  async removeMeal(id: number) {

    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalido';
    }

   const sql = `remove from tbl_refeicao where id = ${id}`

   const result = await this.prisma.$queryRawUnsafe(sql)

   return result;
  }

  async createFoodToMeal(body: CreateFoodToMealDto) {

    const idMeal = await this.validationIdMeal(body.id_refeicao);

      if (idMeal == true) {
        const sql = `insert into tbl_alimento_refeicao(id_alimento, id_refeicao)values(${body.id_alimento}, ${body.id_refeicao})`

        const result = await this.prisma.$queryRawUnsafe(sql)
    
        return result;
  
      } else {
        return 'Id Profissional invalido';
      }

  }

  async findAllFoodMeal(id: number) {
    const sql = `select tbl_alimento.nome as nome, tbl_alimento.id as idAlimento, tbl_refeicao.nome as refeicao, tbl_refeicao.id from tbl_refeicao where id = ${id}`

    const result = await this.prisma.$queryRawUnsafe(sql)

    return result;
  }

  async removeFoodToMeal(idRefeicao: number, idAlimento: number) {

    const valId = await this.validacaoID(idRefeicao);

    if (valId == false) {
      return 'Id Invalido';
    }

   const sql = `remove from tbl_alimento_refeicao where id_alimento = ${idAlimento} and id_refeicao = ${idRefeicao}`

   const result = await this.prisma.$queryRawUnsafe(sql)

   return result;
  }
}
