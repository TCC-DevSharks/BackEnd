import { Module } from '@nestjs/common';
import { RefeicaoService } from './refeicao.service';
import { RefeicaoController } from './refeicao.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [RefeicaoController],
  providers: [RefeicaoService, PrismaService],
})
export class RefeicaoModule {}
