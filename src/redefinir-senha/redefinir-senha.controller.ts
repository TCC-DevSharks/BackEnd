import { Controller, Post, Body} from '@nestjs/common';
import { RedefinirSenhaService } from './redefinir-senha.service';
import { CreateRedefinirSenhaDto } from './dto/create-redefinir-senha.dto';


@Controller('redefinir-senha')
export class RedefinirSenhaController {
  constructor(private readonly redefinirSenhaService: RedefinirSenhaService) {}

  @Post('gestante/confirmar')
  async confirmarRedefinicaoSenhaGestante (@Body() body: {
    email: string;
    token: number;
    novaSenha: string} 
  ): Promise<{}> {
    const { email, token, novaSenha } = body;

    return {
      message: await this.redefinirSenhaService.redefinirSenhaGestante(email, token, novaSenha)
    }
  }

  @Post('gestante/solicitar')
  async solicitarRedefinicaoSenha(
    @Body() body: { email: string },
  ): Promise<void> {
    const { email } = body;

    await this.redefinirSenhaService.enviarTokenPorEmail(email);
  }
}
