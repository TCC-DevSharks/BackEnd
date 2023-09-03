import { Injectable } from '@nestjs/common';
import { CreateSugestaoNomeDto } from './dto/create-sugestao-nome.dto';
import { UpdateSugestaoNomeDto } from './dto/update-sugestao-nome.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SugestaoNomeService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const query = `select tbl_sugestao_nome.id , tbl_sugestao_nome.nome, tbl_sugestao_nome.checkbox, tbl_sexo.sexo
    from tbl_sugestao_nome
      inner join tbl_sexo
        on tbl_sexo.id = tbl_sugestao_nome.id_sexo`;
    const result = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async findOne(sexo: string) {
    const query = `select tbl_sugestao_nome.id , tbl_sugestao_nome.nome, tbl_sugestao_nome.checkbox, tbl_sexo.sexo
    from tbl_sugestao_nome
      inner join tbl_sexo
        on tbl_sexo.id = tbl_sugestao_nome.id_sexo
    where tbl_sexo.sexo = '${sexo}'`;
    const result = await this.prisma.$queryRawUnsafe(query);

    return result;
  }
}
