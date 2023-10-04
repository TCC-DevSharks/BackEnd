import { Module } from '@nestjs/common';
import { DietaService } from './dieta.service';
import { DietaController } from './dieta.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [DietaController],
  providers: [DietaService,PrismaService],
})
export class DietaModule {}
