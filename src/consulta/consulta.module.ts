import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { GestanteService } from 'src/gestante/gestante.service';
import { ProfissionalService } from 'src/profissional/profissional.service';

@Module({
  imports: [PrismaModule],
  controllers: [ConsultaController],
  providers: [ConsultaService, PrismaService, GestanteService, ProfissionalService],
})
export class ConsultaModule {}
