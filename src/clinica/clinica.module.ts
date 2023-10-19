import { Module } from '@nestjs/common';
import { ClinicaService } from './clinica.service';
import { ClinicaController } from './clinica.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ClinicaController],
  providers: [ClinicaService, PrismaService],
  exports: [ClinicaModule],
})
export class ClinicaModule {}
