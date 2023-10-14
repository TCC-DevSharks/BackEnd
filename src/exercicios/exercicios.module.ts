import { Module } from '@nestjs/common';
import { ExerciciosService } from './exercicios.service';
import { ExerciciosController } from './exercicios.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [ExerciciosController],
  providers: [ExerciciosService,PrismaService],
})
export class ExerciciosModule {}
