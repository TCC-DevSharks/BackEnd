import { Module } from '@nestjs/common';
import { ArtigosService } from './artigos.service';
import { ArtigosController } from './artigos.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [ArtigosController],
  providers: [ArtigosService, PrismaService],
})
export class ArtigosModule {}
