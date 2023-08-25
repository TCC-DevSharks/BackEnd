import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  imports: [PrismaModule],
  controllers: [LoginController],
  providers: [LoginService, PrismaService],
})
export class LoginModule {}
