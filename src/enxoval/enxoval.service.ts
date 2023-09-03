import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnxovalService {
  constructor(private prisma: PrismaService) {}

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
}
