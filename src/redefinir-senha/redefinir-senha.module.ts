import { Module } from '@nestjs/common';
import { RedefinirSenhaService } from './redefinir-senha.service';
import { RedefinirSenhaController } from './redefinir-senha.controller';
import { GestanteService } from '../gestante/gestante.service';
import { PrismaService } from '../prisma/prisma.service';
import { ClinicaService } from '../clinica/clinica.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [RedefinirSenhaController],
  providers: [RedefinirSenhaService, GestanteService, PrismaService, ClinicaService],
})
export class RedefinirSenhaModule {}
