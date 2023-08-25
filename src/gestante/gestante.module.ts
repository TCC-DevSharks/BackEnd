import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { GestanteService } from './gestante.service';
import { GestanteController } from './gestante.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GestanteController],
  providers: [
    GestanteService,
    PrismaService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
  exports: [GestanteModule],
})
export class GestanteModule {}
