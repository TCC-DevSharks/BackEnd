import { Module } from '@nestjs/common';
import { MedicacaoService } from './medicacao.service';
import { MedicacaoController } from './medicacao.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [MedicacaoController],
  providers: [MedicacaoService, PrismaService],
})
export class MedicacaoModule {}
