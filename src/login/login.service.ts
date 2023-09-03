import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async findGestante(email: string, senha: string) {
    const sql = `select senha, id from tbl_gestante where email = '${email}'`;

    const result: [] = await this.prisma.$queryRawUnsafe(sql);
    const resultId = await this.prisma.$queryRawUnsafe(sql);

    if (result.length === 0) {
      const array = [{ mensagem: 'A senha ou o email esta errada' }];
      return array;
    } else {
      const password = senha;
      const isMatch = await bcrypt.compare(password, resultId[0].senha);

      if (isMatch === false) {
        const array = [{ mensagem: 'A senha ou o email está errada' }];
        return array;
      }
      return resultId[0].id;
    }
  }

  async findClinica(email: string, senha: string) {
    const sql = `select senha, id from tbl_clinica where email = '${email}'`;

    const result: [] = await this.prisma.$queryRawUnsafe(sql);
    const resultId = await this.prisma.$queryRawUnsafe(sql);

    if (result.length === 0) {
      const array = [{ mensagem: 'A senha ou o email esta errada' }];
      return array;
    } else {
      const password = senha;
      const isMatch = await bcrypt.compare(password, resultId[0].senha);

      if (isMatch === false) {
        const array = [{ mensagem: 'A senha ou o email está errada' }];
        return array;
      }
      return resultId[0].id;
    }
  }

  async findProfissional(email: string, senha: string) {
    const sql = `select * from tbl_profissional where email = '${email}'`;

    const result: [] = await this.prisma.$queryRawUnsafe(sql);
    const resultId = await this.prisma.$queryRawUnsafe(sql);

    if (result.length === 0) {
      const array = [{ mensagem: 'A senha ou o email esta errada' }];
      return array;
    } else {
      const password = senha;
      const isMatch = await bcrypt.compare(password, resultId[0].senha);

      if (isMatch === false) {
        const array = [{ mensagem: 'A senha ou o email está errada' }];
        return array;
      }
      return resultId[0].id;
    }
  }
}
