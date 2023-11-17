import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { GestanteService } from '../gestante/gestante.service';
import { ProfissionalService } from '../profissional/profissional.service';
import { ChatModule } from '../chat/chat.module';
import { userProviders } from '../chat/chat.providers';
import { ChatUserService } from '../chat/chatUser.service';
import { DatabaseModule } from '../mongodb/database.module';

@Module({
  imports: [PrismaModule,  ChatModule, DatabaseModule],
  controllers: [ConsultaController],
  providers: [ConsultaService, PrismaService, GestanteService, ProfissionalService, ChatUserService, ...userProviders],
})
export class ConsultaModule {}
