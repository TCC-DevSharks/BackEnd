import { Module } from '@nestjs/common';
import { MalaMaternidadeService } from './mala-maternidade.service';
import { MalaMaternidadeController } from './mala-maternidade.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [MalaMaternidadeController],
  providers: [MalaMaternidadeService, PrismaService],
})
export class MalaMaternidadeModule {}
