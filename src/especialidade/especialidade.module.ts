import { Module } from '@nestjs/common';
import { EspecialidadeService } from './especialidade.service';
import { EspecialidadeController } from './especialidade.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [EspecialidadeController],
  providers: [EspecialidadeService, PrismaService],
})
export class EspecialidadeModule {}
