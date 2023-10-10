import { HttpStatus, Injectable } from '@nestjs/common';
import { GestanteService } from 'src/gestante/gestante.service';
import { PrismaService } from 'src/prisma/prisma.service';
import * as nodemailer from 'nodemailer';
import * as bcrypt from 'bcrypt';


interface Gestante {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  foto: string;
  email: string;
  senha: string;
  idGenero: number;
}


@Injectable()
export class RedefinirSenhaService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly gestanteService: GestanteService,
  ){}
  private tokenCache: { token: number };

  gerarNumeroAleatorio() {
    const token = Math.floor(Math.random() * 9000) + 1000;
    this.tokenCache = {
      token: token
    }
    return token;

  }

  async enviarTokenPorEmail(email: string): Promise<{}>{
    const gestanteValidation = await this.gestanteService.findEmail(email)

    if(gestanteValidation){
      const token = this.gerarNumeroAleatorio();
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // ou qualquer outro serviço de e-mail
        auth: {
          user: `kaue.lima@uxgroup.com.br`,
          pass: '301906Ka.',
        },
      });
        const mailOptions = {
          from: 'kaue.lima@uxgroup.com.br',
          to: email,
          subject: 'Redefinição de Senha - Conta Bebê-Vindo',
          text: `Seu código de redefinição de senha: ${token}`,
        };
        
        await transporter.sendMail(mailOptions);
        console.log("enviou");
        
        return email;  
    } else{
      console.log('não foi');      
    }
  }

  async validarTokenGestante(email: string, token: number){

    
    const user = await this.gestanteService.findEmail(email)
    if(user){
      if(token == 1){
        return{
          HttpCode: HttpStatus.OK  
        }
      } else{
        return{
          HttpCode: HttpStatus.CONFLICT
        }
      }
      
    } 
  
  }

  async redefinirSenhaGestante(
    email: string,
    token: number,
    novaSenha: string,
  ): Promise<{}> {
   


    this.validarTokenGestante(email,token) 
    if(this.validarTokenGestante){
      const queryUser = `select * from tbl_gestante where email = '${email}'`;
      
      const result: Gestante =
        await this.prismaService.$queryRawUnsafe(queryUser);        
  
      if (result[0]) {
      const idUser = result[0].id

        console.log();
        

        const novaSenhaa = await bcrypt.hash(novaSenha, 10);
        console.log(novaSenhaa);
        
        const queryResetPassword = `update tbl_gestante set senha = '${novaSenhaa}' where id = ${idUser};`;
        
        
        const resultRedefine =
          await this.prismaService.$queryRawUnsafe(queryResetPassword);
          if(resultRedefine){
            console.log("foi"); 
            
          }
  
      } else {
        return {
          message: `Não foi possível redefinir a senha do usuario: ${email}`
        }
      }
   
      delete this.tokenCache[email]; 
    } 
  } 
}


