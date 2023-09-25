import { Body, Injectable } from '@nestjs/common';
import { CreateSugestaoNomeDto } from './dto/create-sugestao-nome.dto';
import { UpdateSugestaoNomeDto } from './dto/update-sugestao-nome.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SugestaoNomeService {
  constructor(private prisma: PrismaService) {}

  async validationIdNome(id: number) {
    const query = `select * from tbl_sugestao_nome where id = ${id}`;

    const result: [] = await this.prisma.$queryRawUnsafe(query);

    if (result.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  async validationIdGestante(id: number) {
    const query = `select * from tbl_gestante where id = ${id}`;

    const result: [] = await this.prisma.$queryRawUnsafe(query);

    if (result.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  async findAll() {
    const query = `select tbl_sugestao_nome.id , tbl_sugestao_nome.nome, tbl_sugestao_nome.checkbox, tbl_sexo.sexo
    from tbl_sugestao_nome
      inner join tbl_sexo
        on tbl_sexo.id = tbl_sugestao_nome.id_sexo  order by tbl_sugestao_nome.nome asc`;
    const result = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async findOne(sexo: string) {
    const query = `select tbl_sugestao_nome.id , tbl_sugestao_nome.nome, tbl_sugestao_nome.checkbox, tbl_sexo.sexo
    from tbl_sugestao_nome
      inner join tbl_sexo
        on tbl_sexo.id = tbl_sugestao_nome.id_sexo
    where tbl_sexo.sexo = '${sexo}' order by tbl_sugestao_nome.nome asc`;
    const result = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async addFavorite(body: CreateSugestaoNomeDto) {
    const idNome = await this.validationIdNome(body.id_nome);
    const idGestante = await this.validationIdGestante(body.id_gestante);

    if (idGestante == true) {
      if (idNome == true) {
        const sql = `insert into tbl_nome_gestante (id_nome, id_gestante)values(${body.id_nome}, ${body.id_gestante});`;

        const getSql = `select tbl_nome_gestante.id, tbl_sugestao_nome.nome as nome, tbl_gestante.nome as gestante 
      from tbl_nome_gestante
        inner join tbl_sugestao_nome
          on tbl_sugestao_nome.id = tbl_nome_gestante.id_nome
        inner join tbl_gestante
          on tbl_gestante.id = tbl_nome_gestante.id_gestante
        order by id desc limit 1;`;

        const result = await this.prisma.$queryRawUnsafe(sql);
        const getResult = await this.prisma.$queryRawUnsafe(getSql);

        return { favorito: getResult };
      } else {
        return 'Id nome invalido';
      }
    } else {
      return 'Id gestante invalido';
    }
  }
  async findFavorite(id: number, sexo: string){
    const getSql = `select tbl_nome_gestante.id, tbl_sugestao_nome.nome as nome, tbl_gestante.nome as gestante, tbl_sexo.sexo
    from tbl_nome_gestante
      inner join tbl_sugestao_nome
        on tbl_sugestao_nome.id = tbl_nome_gestante.id_nome
      inner join tbl_gestante
        on tbl_gestante.id = tbl_nome_gestante.id_gestante
      inner join tbl_sexo
      on tbl_sexo.id = tbl_sugestao_nome.id_sexo
        where tbl_gestante.id = ${id} and tbl_sexo.sexo = "${sexo}" ;`;

    const getResult = await this.prisma.$queryRawUnsafe(getSql);

    return getResult;
  }

  async remove(body: CreateSugestaoNomeDto) {
    const idPlano = await this.validationIdNome(body.id_nome);
    const idGestante = await this.validationIdGestante(body.id_gestante);

    if (idGestante == true) {
      if (idPlano == true) {
        const sql = `delete from tbl_nome_gestante where tbl_nome_gestante.id_nome = ${body.id_nome} and tbl_nome_gestante.id_gestante = ${body.id_gestante}`;

        await this.prisma.$queryRawUnsafe(sql);

        return { message: 'Deletado com sucesso' };
      } else {
        return 'Id nome invalido';
      }
    } else {
      return 'Id gestante invalido';
    }
  }
}
