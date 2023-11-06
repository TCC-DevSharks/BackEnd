import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { GestanteService } from 'src/gestante/gestante.service';
import { ProfissionalService } from 'src/profissional/profissional.service';
import { ChatModule } from 'src/chat/chat.module';
import { userProviders } from 'src/chat/chat.providers';
import { ChatUserService } from 'src/chat/chatUser.service';
import { DatabaseModule } from 'src/mongodb/database.module';

@Module({
  imports: [PrismaModule,  ChatModule, DatabaseModule],
  controllers: [ConsultaController],
  providers: [ConsultaService, PrismaService, GestanteService, ProfissionalService, ChatUserService, ...userProviders],
})
export class ConsultaModule {}
