import { Module } from '@nestjs/common';
import { DeficienciaService } from './deficiencia.service';
import { DeficienciaController } from './deficiencia.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [DeficienciaController],
  providers: [DeficienciaService,PrismaService],
})
export class DeficienciaModule {}
