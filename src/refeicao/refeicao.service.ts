import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateFoodToMealDto,
  CreateRefeicaoDto,
} from './dto/create-refeicao.dto';
import { UpdateRefeicaoDto } from './dto/update-refeicao.dto';

@Injectable()
export class RefeicaoService {
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

  async createMeal(body: CreateRefeicaoDto) {
    const idProfissional = await this.validationIdProfissional(
      body.id_profissional,
    );
    if (idProfissional == true) {
      const sql = `insert into tbl_refeicao(nome, id_profissional)values("${body.nome}", ${body.id_profissional})`;

      const result = await this.prisma.$queryRawUnsafe(sql);

      return result;
    } else {
      return 'Id Profissional invalido';
    }
  }

  async findAllMeal(id: number) {
    const sql = `select * from tbl_refeicao where id_profissional = ${id}`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findOneMeal(id: number) {
    const sql = `select * from tbl_refeicao where id = ${id}`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async updateMeal(id: number, body: CreateRefeicaoDto) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalido';
    }

    const sql = `update tbl_refeicao set nome = "${body.nome}" where id = ${id}`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async removeMeal(id: number) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalido';
    }

    const sql = `delete from tbl_refeicao where id = ${id}`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async createFoodToMeal(body: CreateFoodToMealDto) {
    const idMeal = await this.validationIdMeal(body.id_refeicao);

    if (idMeal == true) {
      const sql = `insert into tbl_alimento_refeicao(id_alimento, id_refeicao)values(${body.id_alimento}, ${body.id_refeicao})`;

      const result = await this.prisma.$queryRawUnsafe(sql);

      return result;
    } else {
      return 'Id Profissional invalido';
    }
  }

  async findAllFoodMeal(id: number) {
    const sql = `select tbl_alimento.nome as nome, tbl_alimento.id as idAlimento, tbl_alimento.imagem as imagem, tbl_alimento.peso as peso, tbl_categoriaAlimento.nome as categoria, tbl_refeicao.nome as refeicao, tbl_refeicao.id as id 
    from tbl_refeicao
      inner join tbl_alimento_refeicao
        on tbl_alimento_refeicao.id_refeicao = tbl_refeicao.id
      inner join tbl_alimento
        on tbl_alimento_refeicao.id_alimento = tbl_alimento.id
      inner join tbl_categoriaAlimento
        on tbl_alimento.id_categoria = tbl_categoriaAlimento.id
       where tbl_refeicao.id = ${id}`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async removeFoodToMeal(idRefeicao: number, idAlimento: number) {
    const valId = await this.validacaoID(idRefeicao);

    if (valId == false) {
      return 'Id Invalido';
    }

    const sql = `delete from tbl_alimento_refeicao where id_alimento = ${idAlimento} and id_refeicao = ${idRefeicao}`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findFood() {
    const sql = `select tbl_alimento.id as id,tbl_alimento.nome as nome, tbl_alimento.imagem as imagem, tbl_alimento.peso as peso, tbl_categoriaAlimento.nome as categoria 
    from tbl_alimento
      inner join tbl_categoriaAlimento
        on tbl_categoriaAlimento.id = tbl_alimento.id_categoria`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }
}
