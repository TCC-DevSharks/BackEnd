import { Module } from '@nestjs/common';
import { ProfissionalService } from './profissional.service';
import { ProfissionalController } from './profissional.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatUserService } from 'src/chat/chatUser.service';
import { ChatModule } from 'src/chat/chat.module';
import { userProviders } from 'src/chat/chat.providers';
import { DatabaseModule } from 'src/mongodb/database.module';

@Module({
  imports: [PrismaModule, ChatModule, DatabaseModule],
  controllers: [ProfissionalController],
  providers: [ProfissionalService, PrismaService,  ChatUserService, ...userProviders],
})
export class ProfissionalModule {}
