import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { RedefinirSenhaService } from './redefinir-senha.service';

@Controller('redefinir-senha')
export class RedefinirSenhaController {
  constructor(private readonly redefinirSenhaService: RedefinirSenhaService) {}

  @Post('gestante/confirmar')
  async confirmarRedefinicaoSenhaGestante(
    @Body() body: { email: string; token: number; novaSenha: string },
  ): Promise<object> {
    let message: object;
    const { email, token, novaSenha } = body;
    const result = await this.redefinirSenhaService.redefinirSenhaGestante(
      email,
      token,
      novaSenha,
    );

    if (result) {
      message = {
        message: await result,
        status: HttpStatus.OK,
      };
    } 
    return {
      message,
    };
  }

  @Post('gestante/solicitar')
  async solicitarRedefinicaoSenhaGestante(
    @Body() body: { email: string },
  ): Promise<{}> {
    let message  = {};
    const { email } = body;
    const result = await this.redefinirSenhaService.enviarTokenPorEmailGestante(email);

    if (result) {
      message = {
        result:
          await result,
        status: HttpStatus.OK,
      };
    }
    return {
      message,
    };
  }


  @Post('clinica/solicitar')
  async solicitarRedefinicaoSenhaClinica(
    @Body() body: { email: string },
  ): Promise<{}> {
    let message  = {};
    const { email } = body;
    const result = await this.redefinirSenhaService.enviarTokenPorEmailClinica(email);

    if (result) {
      message = {
        message:
          'Um E-mail foi enviado para você, para que possamos redefinir sua senha:',
        status: HttpStatus.OK,
      };
    } else {
      message = {
        message:
          result,
        status: HttpStatus.NOT_FOUND,
      };
    }
    return {
      message,
    };
  }

  @Post('clinica/confirmar')
  async confirmarRedefinicaoSenhaClinica(
    @Body() body: { email: string; token: number; novaSenha: string },
  ): Promise<object> {
    let message: object;
    const { email, token, novaSenha } = body;
    const result = await this.redefinirSenhaService.redefinirSenhaClinica(
      email,
      token,
      novaSenha,
    );

    if (result) {
      message = {
        result: await result,
        status: HttpStatus.OK,
      };
    } else {
      message = {
        result: await result,
        status: HttpStatus.NOT_FOUND,
      };
    }
    return {
      message,
    };
  }


}
