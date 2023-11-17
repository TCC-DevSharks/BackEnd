import { Module } from '@nestjs/common';
import { EnxovalService } from './enxoval.service';
import { EnxovalController } from './enxoval.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [EnxovalController],
  providers: [EnxovalService, PrismaService],
})
export class EnxovalModule {}
