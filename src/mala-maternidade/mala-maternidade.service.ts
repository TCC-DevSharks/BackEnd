import { Injectable } from '@nestjs/common';
import { CreateMalaMaternidadeDto } from './dto/create-mala-maternidade.dto';
import { UpdateMalaMaternidadeDto } from './dto/update-mala-maternidade.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MalaMaternidadeService {
  constructor(private prisma: PrismaService) {}

  async validationIdMala(id: number) {
    const query = `select * from tbl_malaMaternidade where id = ${id}`;

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
    const query = `select tbl_malaMaternidade.id, tbl_malaMaternidade.item, tbl_malaMaternidade.checkbox, tbl_malaMaternidade.descricao 
    from tbl_malaMaternidade`;
    const result = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async addFavorite(body: CreateMalaMaternidadeDto) {
    const idEnxoval = await this.validationIdMala(body.id_mala);
    const idGestante = await this.validationIdGestante(body.id_gestante);

    if (idGestante == true) {
      if (idEnxoval == true) {
        const sql = `insert into tbl_mala_gestante (id_mala, id_gestante)values(${body.id_mala}, ${body.id_gestante});`;

        await this.prisma.$queryRawUnsafe(sql);

        return { favorito: 'Favorito adicionado com sucesso' };
      } else {
        return 'Id nome invalido';
      }
    } else {
      return 'Id gestante invalido';
    }
  }
  async findFavorite(id: number) {
    const getSql = `select tbl_mala_gestante.id, tbl_malaMaternidade.item as item, tbl_gestante.nome as gestante, tbl_malaMaternidade.descricao as descricao 
    from tbl_mala_gestante
      inner join tbl_malaMaternidade
        on tbl_malaMaternidade.id = tbl_mala_gestante.id_mala
      inner join tbl_gestante
        on tbl_gestante.id = tbl_mala_gestante.id_gestante
        where tbl_gestante.id = ${id} ;`;

    const getResult = await this.prisma.$queryRawUnsafe(getSql);

    return getResult;
  }

  async remove(id_mala: number, id_gestante: number) {
    const idPlano = await this.validationIdMala(id_mala);
    const idGestante = await this.validationIdGestante(id_gestante);

    if (idGestante == true) {
      if (idPlano == true) {
        const sql = `delete from tbl_mala_gestante where tbl_mala_gestante.id_plano = ${id_mala} and tbl_mala_gestante.id_gestante = ${id_gestante}`;

        await this.prisma.$queryRawUnsafe(sql);

        return { message: 'Deletado com sucesso' };
      } else {
        return 'Id plano invalido';
      }
    } else {
      return 'Id gestante invalido';
    }
  }
}
