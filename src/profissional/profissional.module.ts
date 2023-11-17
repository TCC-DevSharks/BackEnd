import { Module } from '@nestjs/common';
import { ProfissionalService } from './profissional.service';
import { ProfissionalController } from './profissional.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { ChatUserService } from '../chat/chatUser.service';
import { ChatModule } from '../chat/chat.module';
import { userProviders } from '../chat/chat.providers';
import { DatabaseModule } from '../mongodb/database.module';

@Module({
  imports: [PrismaModule, ChatModule, DatabaseModule],
  controllers: [ProfissionalController],
  providers: [ProfissionalService, PrismaService,  ChatUserService, ...userProviders],
})
export class ProfissionalModule {}
