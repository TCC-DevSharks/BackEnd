import { Module } from '@nestjs/common';
import { PlanoPartoService } from './plano-parto.service';
import { PlanoPartoController } from './plano-parto.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [PlanoPartoController],
  providers: [PlanoPartoService, PrismaService],
})
export class PlanoPartoModule {}
