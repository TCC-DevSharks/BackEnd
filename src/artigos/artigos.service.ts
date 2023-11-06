import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { UpdateArtigoDto } from './dto/update-artigo.dto';

@Injectable()
export class ArtigosService {
  constructor(private prisma: PrismaService,) {}
  create(body: CreateArtigoDto) {
  }

  async findAll() {
    const sql = `select * from tbl_artigo`

    const  result = await this.prisma.$queryRawUnsafe(sql)

    return result
  }

  async findOne(id: number) {
    const sql = `select * from tbl_artigo where id = ${id}`

    const  result = await this.prisma.$queryRawUnsafe(sql)

    return result
  }

  update(id: number, updateArtigoDto: UpdateArtigoDto) {
    return `This action updates a #${id} artigo`;
  }

  remove(id: number) {
    return `This action removes a #${id} artigo`;
  }
}
