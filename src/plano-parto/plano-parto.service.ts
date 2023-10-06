import { Injectable } from '@nestjs/common';
import { CreatePlanoPartoDto } from './dto/create-plano-parto.dto';
import { UpdatePlanoPartoDto } from './dto/update-plano-parto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlanoPartoService {
  constructor(private prisma: PrismaService) {}

  async validationIdPlano(id: number) {
    const query = `select * from tbl_plano_parto where id = ${id}`;

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
    const query = `select tbl_plano_parto.id, tbl_plano_parto.item, tbl_plano_parto.checkbox,tbl_planoCategoria.categoria 
    from tbl_plano_parto
      inner join tbl_planoCategoria
        on tbl_planoCategoria.id = tbl_plano_parto.id_categoria`;
    const result = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async findOne(categoria: string) {
    const query = `select tbl_plano_parto.id, tbl_plano_parto.item, tbl_plano_parto.checkbox, tbl_planoCategoria.categoria 
    from tbl_plano_parto
      inner join tbl_planoCategoria
        on tbl_planoCategoria.id = tbl_plano_parto.id_categoria
    where tbl_planoCategoria.categoria = '${categoria}'`;
    const result = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async addFavorite(body: CreatePlanoPartoDto) {
    const idPlano = await this.validationIdPlano(body.id_plano);
    const idGestante = await this.validationIdGestante(body.id_gestante);

    if (idGestante == true) {
      if (idPlano == true) {
        const sql = `insert into tbl_plano_gestante (id_plano, id_gestante)values(${body.id_plano}, ${body.id_gestante});`;

        const getSql = `select tbl_plano_gestante.id, tbl_plano_parto.item as item, tbl_gestante.nome as gestante 
      from tbl_plano_gestante
        inner join tbl_plano_parto
          on tbl_plano_parto.id = tbl_plano_gestante.id_plano
        inner join tbl_gestante
          on tbl_gestante.id = tbl_plano_gestante.id_gestante
        order by id desc limit 1;`;

        await this.prisma.$queryRawUnsafe(sql);
        const getResult = await this.prisma.$queryRawUnsafe(getSql);

        return { favorito: getResult };
      } else {
        return 'Id nome invalido';
      }
    } else {
      return 'Id gestante invalido';
    }
  }
  async findFavorite(id: number) {
    const getSql = `select tbl_plano_gestante.id, tbl_plano_parto.item as item, tbl_gestante.nome as gestante, tbl_planoCategoria.categoria as categoria 
    from tbl_plano_gestante
      inner join tbl_plano_parto
        on tbl_plano_parto.id = tbl_plano_gestante.id_plano
      inner join tbl_gestante
        on tbl_gestante.id = tbl_plano_gestante.id_gestante
      inner join tbl_planoCategoria
        on tbl_planoCategoria.id = tbl_plano_parto.id_categoria
        where tbl_gestante.id = ${id} ;`;

    const getResult = await this.prisma.$queryRawUnsafe(getSql);

    return getResult;
  }

  async remove(id_plano: number, id_gestante: number) {
    const idPlano = await this.validationIdPlano(id_plano);
    const idGestante = await this.validationIdGestante(id_gestante);

    if (idGestante == true) {
      if (idPlano == true) {
        const sql = `delete from tbl_plano_gestante where tbl_plano_gestante.id_plano = ${id_plano} and tbl_plano_gestante.id_gestante = ${id_gestante}`;

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
