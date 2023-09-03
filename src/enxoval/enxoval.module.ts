import { Module } from '@nestjs/common';
import { EnxovalService } from './enxoval.service';
import { EnxovalController } from './enxoval.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [EnxovalController],
  providers: [EnxovalService, PrismaService],
})
export class EnxovalModule {}
