import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { Login } from './entities/login.entity';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('gestante')
  async findGestante(
    body: CreateLoginDto
  ) {
    const login = await this.loginService.findGestante(body);

    return { login: login };
  }

  @Get('clinica')
  async findClinica(
    body: CreateLoginDto
  ) {
    const login = await this.loginService.findClinica(body);

    return login;
  }

  @Get('profissional')
  async findProfissional(
    body: CreateLoginDto
  ) {
    const login = await this.loginService.findProfissional(body);

    return login;
  }
}
