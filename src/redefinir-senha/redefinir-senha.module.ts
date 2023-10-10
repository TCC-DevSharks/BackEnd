import { Module } from '@nestjs/common';
import { RedefinirSenhaService } from './redefinir-senha.service';
import { RedefinirSenhaController } from './redefinir-senha.controller';
import { GestanteService } from 'src/gestante/gestante.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RedefinirSenhaController],
  providers: [RedefinirSenhaService, GestanteService, PrismaService],
})
export class RedefinirSenhaModule {}
