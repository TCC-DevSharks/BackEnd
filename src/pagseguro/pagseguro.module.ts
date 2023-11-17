import { Module } from '@nestjs/common';
import { PagseguroService } from './pagseguro.service';
import { PagseguroController } from './pagseguro.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [PagseguroController],
  providers: [PagseguroService, PrismaService],
})
export class PagseguroModule {}
