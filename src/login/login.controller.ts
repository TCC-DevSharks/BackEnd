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
import { Login } from './entities/login.entity';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get('gestante')
  async findGestante(
    @Query('email') email: string,
    @Query('senha') senha: string,
  ) {
    const login = await this.loginService.findGestante(email, senha);

    return { login: login };
  }

  @Get('clinica')
  async findClinica(
    @Query('email') email: string,
    @Query('senha') senha: string,
  ) {
    const login = await this.loginService.findClinica(email, senha);

    return login;
  }

  @Get('profissional')
  async findProfissional(
    @Query('email') email: string,
    @Query('senha') senha: string,
  ) {
    const login = await this.loginService.findProfissional(email, senha);

    return login;
  }
}
