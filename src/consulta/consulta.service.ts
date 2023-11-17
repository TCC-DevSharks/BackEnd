import { Injectable } from '@nestjs/common';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as nodemailer from 'nodemailer';
import { GestanteService } from '../gestante/gestante.service';
import { ProfissionalService } from '../profissional/profissional.service';
import { ChatUserService } from '../chat/chatUser.service';

interface  Clinica {
  clinica : string,
  telefone : string,
  endereco : string
}

interface Profissional {
  nome : string,
  especialidade : string
}

interface Gestante{
  nome: string,
  data_nascimento : string,
  email : string,
  senha : string,
  cpf : string,
  peso : number,
  altura : number,
  data_parto: string,
  foto: string,
  semana_gestacao: number,
  telefone: string
}

@Injectable()
export class ConsultaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gestanteService: GestanteService,
    private readonly profissionalService : ProfissionalService,
    private readonly chatUserService: ChatUserService) {}

  async validacaoID(id: number) {
    const sqlValidacaoId = `select * from tbl_consulta where id =${id};`;
    const resultValidacaoId: [] = await this.prisma.$queryRawUnsafe(
      sqlValidacaoId,
    );

    if (resultValidacaoId.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async validationIdProfissional(id: number) {
    const query = `select * from tbl_profissional where id = ${id}`;

    const result: [] = await this.prisma.$queryRawUnsafe(query);

    if (result.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  async validationIdGestante(id: number) {
    const query = `select * from tbl_gestante where id = ${id}`;

    const result: [] = await this.prisma.$queryRawUnsafe(query);

    if (result.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  async create(body: CreateConsultaDto) {
    const idGestante = await this.validationIdGestante(body.id_gestante);
    const idProfissional = await this.validationIdProfissional(
      body.id_profissional,
    );
      const gestanteData = await this.gestanteService.findOne(body.id_gestante)
      let gestante : Gestante =  gestanteData[0]
      const clinicaData = await this.profissionalService.findOne(body.id_profissional)
      let clinica : Clinica = clinicaData[0]
      const profissionalData = await this.profissionalService.findOne(body.id_profissional)
      let profissional : Profissional = profissionalData[0]

      const chat = await this.chatUserService.findOne(gestante.email,"Gestante")

      
    if (chat.toString().length == 0) {

    const corpo = {name: `${gestante.nome}`, usuario:`Gestante`, email: `${gestante.email}`, foto: `${gestante.foto}`}

    await this.chatUserService.createUser(corpo)
      
    }
      
    if (idGestante == true) {
      if (idProfissional == true) {
        const sql = `insert into tbl_consulta(dia, hora, id_profissional, id_gestante) values (
          '${body.dia}', '${body.hora}',${body.id_profissional}, ${body.id_gestante}
        );`;

        const result = await this.prisma.$queryRawUnsafe(sql);
        
        const enviar = await this.enviarEmailConsulta(gestante,clinica,body.hora,body.dia,profissional)
        return result;
      } else {
        return 'Id Profissional invalido';
      }
    } else {
      return 'Id Gestante invalido';
    }
  }

  async findAll() {
    const sql = `    select 
    tbl_consulta.id as id, date_format(tbl_consulta.dia, '%d/%m/%Y') as dia, time_format(tbl_consulta.hora,'%H:%i:0%s') as hora, tbl_consulta.id_profissional as id_profissional, tbl_consulta.id_gestante as id_gestante,
    tbl_profissional.nome as profissional, tbl_gestante.nome as gestante, tbl_clinica.razao_social as clinica
    from tbl_consulta
		inner join tbl_profissional
			on tbl_profissional.id = tbl_consulta.id_profissional
		inner join tbl_gestante
			on tbl_gestante.id = tbl_consulta.id_gestante
    inner join tbl_clinica
      on tbl_clinica.id = tbl_profissional.id_clinica;`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findOne(id: number) {
    const sql = `select tbl_gestante.nome as gestante, tbl_gestante.email as email, tbl_gestante.cpf as cpf, tbl_gestante.telefone as telefone,
    tbl_endereco_gestante.numero as numero, tbl_endereco_gestante.complemento as complemento, tbl_endereco_gestante.cep as cep,
        tbl_clinica.razao_social as clinica, tbl_enderecoClinica.numero as numeroClinica, tbl_enderecoCLinica.complemento as complementoClinica, tbl_telefone.numero as telefoneClinica,
        tbl_enderecoClinica.cep as cepClinica,
        tbl_profissional.nome as profissional, tbl_especialidade.nome as especialidade,
        date_format(tbl_consulta.dia, '%d/%m/%Y') as dia, time_format(tbl_consulta.hora,'%H:%i:0%s') as hora
    from tbl_consulta
      inner join tbl_gestante
        on tbl_consulta.id_gestante = tbl_gestante.id
      inner join tbl_profissional
        on tbl_consulta.id_profissional = tbl_profissional.id
      inner join tbl_clinica
        on tbl_clinica.id = tbl_profissional.id_clinica
      inner join tbl_profissional_especialidade
        on tbl_profissional.id = tbl_profissional_especialidade.id_profissional
      inner join tbl_especialidade
        on tbl_especialidade.id = tbl_profissional_especialidade.id_especialidade
             inner join tbl_clinica_telefone
            on tbl_clinica_telefone.id_clinica = tbl_clinica.id
          inner join tbl_telefone
            on tbl_telefone.id = tbl_clinica_telefone.id_telefone
          inner join tbl_tipo_telefone
            on tbl_tipo_telefone.id = tbl_telefone.id_tipo_telefone
          inner join tbl_enderecoClinica
            on tbl_clinica.id = tbl_enderecoClinica.id_clinica
      inner join tbl_endereco_gestante
        on tbl_endereco_gestante.id_gestante = tbl_gestante.id
      where tbl_consulta.id = ${id};`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }



  async update(id: number, body: UpdateConsultaDto) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalid';
    }

    const sql = `update tbl_consulta set 
    dia = '${body.dia}',
    hora = '${body.hora}',
    id_profissional = ${body.id_profissional},
    id_gestante = ${body.id_gestante} 
    where id = ${id};`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async remove(id: number) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalid';
    }
    const sql = `delete from tbl_consulta where id = ${id};`;

    return await this.prisma.$queryRawUnsafe(sql);
  }

  async enviarEmailConsulta(gestante : Gestante, clinica: Clinica, hora: string, dia: string, medico: Profissional): Promise<{}>{
    
    const gestanteValidation = await this.gestanteService.findEmail(gestante.email)
    let message = {}
    if(gestanteValidation){
      let htmlEmail = `

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>E-mail de Redefinição de Senha</title>
</head>
<body style="height: auto; margin: 0;  padding: 50px !important;  font-family: Arial, sans-serif; background-color: #f3f3f3;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td style="text-align: center;">
                <!-- Nome e Logo -->
                <table align="center" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                        <td align="center" valign="top" style="padding: 20px 0;">
                            <img src="https://encurtador.com.br/gktK6" alt="Logo da Empresa" width="150">
                            <h1 style="color: #b6b6f6;">Bebê-Vindo</h1>
                        </td>
                    </tr>
                </table>

                <!-- Bloco com Cantos Arredondados -->
                <table align="center" cellpadding="0" cellspacing="0" width="600" style="height: 40vh; background-color: #ffffff; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);">
                    <tr>
                        <td style="vertical-align: top;" align="top">
                            <div style="border-radius: 10px 10px 0px 0px ; background-image: url('https://encurtador.com.br/zOX19'); background-repeat: no-repeat; background-size: 100%; background-position: top; position: relative; align-items: center; justify-content: center;">
                                <table align="center" cellpadding="0" cellspacing="0" width="600" style="height: 60%;">
                                    <tr>
                                        <td align="center" >
                                            <div style="height: 100%;">
                                                <h2 style="font-size: 2rem; color: #fff; width: 100%;  ">Consulta agendada!</h2>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div>
                                <table cellpadding="0" cellspacing="0" width="600" style="height: 60%;">
                                    <tr>
                                        <td align="left">
                                            <div style="padding-left: 5%; padding-top:2%; height: 100%; padding-bottom:5%;">
                                                <h2 style="font-size: 1rem; color: #464444; width: 100%;">
                                                    Olá mamãe, ${gestante.nome}
                                                </h2>
                                                <p style="font-size: 0.9rem; color: #464444; width: 80%;">
                                                  Estamos felizes em informar que sua consulta na ${clinica.clinica} foi 
                                                  marcada com sucesso! Aqui estão os detalhes da sua consulta:
                                                </p>
                                                <h3 style="font-size: 1rem; color: #b6b6f6;">
                                                  Data e Hora: ${dia.split('$$$$-')} as ${hora}
                                                </h3>
                                                <h3 style="font-size: 1rem; color: #b6b6f6;">
                                                  Especialidade: ${medico.especialidade}
                                                </h3>
                                                <h3 style="font-size: 1rem; color: #b6b6f6;">
                                                  Médico: ${medico.nome}
                                                </h3>
                                                <p style="font-size: 0.9rem; color: #464444; width:80%">
                                                  Lembramos que a pontualidade é essencial. 
                                                  Chegue alguns minutos antes da consulta 
                                                  para preenchimento de formulários, se necessário.
                                                </p>
                                                <p style="font-size: 0.9rem; color: #464444; width:80%">
                                                      Se você precisar cancelar ou reagendar a consulta, por favor, entre em contato conosco o mais rápido possível pelo telefone: <h2 style="color: #464444; font-size: 1rem;" >${clinica.telefone}</h2> 
                                                </p>
                                                <h3 style="font-size: 0.9rem; color: #464444;">
                                                  Desejamos que a sua consulta seja produtiva e tranquila.
                                                </h3>
                                                <h3 style="font-size:1.2rem; color: #b6b6f6;">
                                                  Atenciosamente, ${clinica.clinica}
                                                </h3>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>

      `;
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // ou qualquer outro serviço de e-mail
        auth: {
          user: `kaue.lima@uxgroup.com.br`,
          pass: '301906Ka.',
        },
        });
      const mailOptions = {
        from: 'kaue.lima@uxgroup.com.br',
        to: gestante.email,
        subject: 'Consulta Marcada - Conta Bebê-Vindo',
        text: `Agendamento de Consulta: ${clinica.clinica}`,
        html: `${htmlEmail}`
      };
      await transporter.sendMail(mailOptions);
      message = {
        result : 'E-mail da consulta enviada'
      }
    } else{
      message = {
        result : {message:'Não foi possível enviar o E-mail',status: 200}
        
      }
    }
    return message
  }
}
