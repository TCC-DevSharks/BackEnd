import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEnxovalDto } from './dto/create-enxoval.dto';

@Injectable()
export class EnxovalService {
  constructor(private prisma: PrismaService) {}

  async validationIdEnxoval(id: number) {
    const query = `select * from tbl_enxoval where id = ${id}`;

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
    const query = `select tbl_enxoval.id, tbl_enxoval.item, tbl_enxoval.checkbox, tbl_enxoval.quantidade, tbl_planoCategoria.categoria 
    from tbl_enxoval
      inner join tbl_planoCategoria
        on tbl_planoCategoria.id = tbl_enxoval.id_categoria`;
    const result = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async findOne(categoria: string) {
    const query = `select tbl_enxoval.id, tbl_enxoval.item, tbl_enxoval.checkbox, tbl_enxoval.quantidade, tbl_planoCategoria.categoria 
    from tbl_enxoval
      inner join tbl_planoCategoria
        on tbl_planoCategoria.id = tbl_enxoval.id_categoria
    where tbl_planoCategoria.categoria = '${categoria}'`;
    const result = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async addFavorite(body: CreateEnxovalDto) {
    const idEnxoval = await this.validationIdEnxoval(body.id_enxoval);
    const idGestante = await this.validationIdGestante(body.id_gestante);

    if (idGestante == true) {
      if (idEnxoval == true) {
        const sql = `insert into tbl_enxoval_gestante (id_enxoval, id_gestante)values(${body.id_enxoval}, ${body.id_gestante});`;

        const getSql = `select tbl_enxoval_gestante.id, tbl_enxoval.item as item, tbl_gestante.nome as gestante 
      from tbl_enxoval_gestante
        inner join tbl_enxoval
          on tbl_enxoval.id = tbl_enxoval_gestante.id_enxoval
        inner join tbl_gestante
          on tbl_gestante.id = tbl_enxoval_gestante.id_gestante
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
    const getSql = `select tbl_enxoval_gestante.id, tbl_enxoval.item as item, tbl_gestante.nome as gestante, tbl_enxoval.quantidade as quantidade, tbl_planoCategoria.categoria as categoria 
    from tbl_enxoval_gestante
      inner join tbl_enxoval
        on tbl_enxoval.id = tbl_enxoval_gestante.id_enxoval
      inner join tbl_gestante
        on tbl_gestante.id = tbl_enxoval_gestante.id_gestante
      inner join tbl_planoCategoria
        on tbl_planoCategoria.id = tbl_enxoval.id_categoria
        where tbl_gestante.id = ${id} ;`;

    const getResult = await this.prisma.$queryRawUnsafe(getSql);

    return getResult;
  }

  async remove(id_enxoval: number,id_gestante: number) {
    const idEnxoval = await this.validationIdEnxoval(id_enxoval);
    const idGestante = await this.validationIdGestante(id_gestante);

    if (idGestante == true) {
      if (idEnxoval == true) {
        const sql = `delete from tbl_enxoval_gestante where tbl_enxoval_gestante.id_enxoval = ${id_enxoval} and tbl_enxoval_gestante.id_gestante = ${id_gestante}`;

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
