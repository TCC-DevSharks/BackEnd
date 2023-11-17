import { Module } from '@nestjs/common';
import { SugestaoNomeService } from './sugestao-nome.service';
import { SugestaoNomeController } from './sugestao-nome.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [SugestaoNomeController],
  providers: [SugestaoNomeService, PrismaService],
})
export class SugestaoNomeModule {}
