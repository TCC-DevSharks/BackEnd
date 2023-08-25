import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async findGestante(email: string, senha: string) {
    const sql = `select * from tbl_gestante where email = '${email}' and senha = '${senha}'`;

    const result: [] = await this.prisma.$queryRawUnsafe(sql);
    const resultId = await this.prisma.$queryRawUnsafe(sql);

    if (result.length === 0) {
      const array = [{ mensagem: false }];
      return array;
    } else {
      const gestanteQuery = `select tbl_gestante.id, tbl_gestante.nome as nome, date_format(tbl_gestante.data_nascimento, '%d/%m/%Y') as data_nascimento,
      tbl_gestante.email as email,tbl_gestante.senha as senha
     from tbl_gestante
       where tbl_gestante.id = ${resultId[0].id}
         order by tbl_gestante.id asc`;

      const gestante = await this.prisma.$queryRawUnsafe(gestanteQuery);
      return gestante;
    }
  }

  async findClinica(email: string, senha: string) {
    const sql = `select * from tbl_clinica where email = '${email}' and senha = '${senha}'`;

    const result: [] = await this.prisma.$queryRawUnsafe(sql);
    const resultId = await this.prisma.$queryRawUnsafe(sql);

    if (result.length === 0) {
      return false;
    } else {
      return {
        message: true,
        id_gestante: resultId[0].id,
      };
    }
  }

  async findProfissional(email: string, senha: string) {
    const sql = `select * from tbl_profissional where email = '${email}' and senha = '${senha}'`;

    const result: [] = await this.prisma.$queryRawUnsafe(sql);
    const resultId = await this.prisma.$queryRawUnsafe(sql);

    if (result.length === 0) {
      return false;
    } else {
      return {
        message: true,
        id_gestante: resultId[0].id,
      };
    }
  }
}
