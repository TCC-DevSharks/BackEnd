import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTimelineDto } from './dto/create-timeline.dto';
import { UpdateTimelineDto } from './dto/update-timeline.dto';

@Injectable()
export class TimelineService {
  constructor(private prisma: PrismaService) {}
  
  create(createTimelineDto: CreateTimelineDto) {
    return 'This action adds a new timeline';
  }

  async findAll() {
    const sql = `select * from tbl_timeline`

    const result = await this.prisma.$queryRawUnsafe(sql)

    return result
  }

  async findOne(id: number) {
    const sql = `select * from tbl_timeline  where tbl_timeline.semana = ${id}`

    const result = await this.prisma.$queryRawUnsafe(sql)

    return result
  }

  update(id: number, updateTimelineDto: UpdateTimelineDto) {
    return `This action updates a #${id} timeline`;
  }

  remove(id: number) {
    return `This action removes a #${id} timeline`;
  }
}
