import { Module } from '@nestjs/common';
import { AlergiaService } from './alergia.service';
import { AlergiaController } from './alergia.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [AlergiaController],
  providers: [AlergiaService, PrismaService],
})
export class AlergiaModule {}
