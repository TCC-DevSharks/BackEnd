import { Module } from '@nestjs/common';
import { ComorbidadeService } from './comorbidade.service';
import { ComorbidadeController } from './comorbidade.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [ComorbidadeController],
  providers: [ComorbidadeService, PrismaService],
})
export class ComorbidadeModule {}
