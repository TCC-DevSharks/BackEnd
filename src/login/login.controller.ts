import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('gestante')
  async findGestante( @Body() body: CreateLoginDto) {
    console.log(body);
    
    const login = await this.loginService.findGestante(body);

    return { login: login };
  }

  @Post('clinica')
  async findClinica(
    @Body() body: CreateLoginDto
  ) {
    const login = await this.loginService.findClinica(body);

    if (typeof login !== 'string') {
      return { id: login};
    } else {
      throw new HttpException(`${login}`, HttpStatus.NOT_FOUND);
    }
  }

  @Post('profissional')
  async findProfissional(
    @Body() body: CreateLoginDto
  ) {
    const login = await this.loginService.findProfissional(body);

    return login;
  }
}
