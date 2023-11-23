import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLoginDto } from '../login/dto/create-login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) { }

  async findGestante(body: CreateLoginDto) {
    const sql = `select senha, id from tbl_gestante where email = '${body.email}'`;

    const result: [] = await this.prisma.$queryRawUnsafe(sql);
    const resultId = await this.prisma.$queryRawUnsafe(sql);

    if (result.length === 0) {
      const array = [{ mensagem: 'A senha ou o email esta errada' }];
      return array;
    } else {
      const password = body.senha;
      const isMatch = await bcrypt.compare(password, resultId[0].senha);

      if (isMatch === false) {
        const array = [{ mensagem: 'A senha ou o email está errada' }];
        return array;
      }
      return [{ id: resultId[0].id }];
    }
  }

  async findClinica(body: CreateLoginDto) {
    const sql = `select senha, id from tbl_clinica where email = '${body.email}'`;

    let resultJson = {}
    const result: [] = await this.prisma.$queryRawUnsafe(sql);
    const resultId = await this.prisma.$queryRawUnsafe(sql);

    if (result.length === 0) {
      resultJson = {
        message: "A senha ou o email esta errada",
        status: HttpStatus.UNAUTHORIZED
      }
      return resultJson;
    } else {
      const password = body.senha;
      const isMatch = await bcrypt.compare(password, resultId[0].senha);

      if (isMatch === false) {
        resultJson = {
          message: "A senha ou o email esta errada",
          status: HttpStatus.UNAUTHORIZED
        }
        return resultJson;
      }
      resultJson = {
        message: 'Login Efetuado',
        status: HttpStatus.ACCEPTED,
        id: resultId[0].id
      }
      console.log(resultJson);
      
      return resultJson
    }
  }

  async findProfissional(body: CreateLoginDto) {
    const sql = `select * from tbl_profissional where email = '${body.email}'`;
    let resultJson = {}
    const result: [] = await this.prisma.$queryRawUnsafe(sql);
    const resultId = await this.prisma.$queryRawUnsafe(sql);

    if (result.length === 0) {
      resultJson = {
        message: "A senha ou o email esta errada",
        status: HttpStatus.UNAUTHORIZED
      }
      return resultJson;
    } else {
      const password = body.senha;
      const isMatch = await bcrypt.compare(password, resultId[0].senha);

      if (isMatch === false) {
        resultJson = {
          message: "A senha ou o email esta errada",
          status: HttpStatus.UNAUTHORIZED
        }
        return resultJson;
      }
      resultJson = {
        message: 'Login Efetuado',
        status: HttpStatus.ACCEPTED,
        id: resultId[0].id
      }
      return resultJson
    }
  }
}
