import { Injectable } from '@nestjs/common';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as nodemailer from 'nodemailer';
import { GestanteService } from 'src/gestante/gestante.service';
import { ProfissionalService } from 'src/profissional/profissional.service';

interface  Clinica {
  nome : string,
  telefone : string,
  endereco : string
}

interface Profissional {
  nome : string,
  especialidade : string
}

interface Gestante{
  email : string
}

@Injectable()
export class ConsultaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gestanteService: GestanteService,
    private readonly profissionalService : ProfissionalService,) {}

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


    if (idGestante == true) {
      if (idProfissional == true) {
        const sql = `insert into tbl_consulta(dia, hora, id_profissional, id_gestante) values (
          '${body.dia}', '${body.hora}',${body.id_profissional}, ${body.id_gestante}
        );`;

        const result = await this.prisma.$queryRawUnsafe(sql);
        
        const enviar = await this.enviarEmailConsulta(gestante.email,clinica,body.hora,body.dia,profissional)
        
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
    const sql = `    select 
    tbl_consulta.id as id, date_format(tbl_consulta.dia, '%d/%m/%Y') as dia, time_format(tbl_consulta.hora,'%H:%i:0%s') as hora, tbl_consulta.id_profissional as id_profissional, tbl_consulta.id_gestante as id_gestante,
    tbl_profissional.nome as profissional, tbl_gestante.nome as gestante
    from tbl_consulta
		inner join tbl_profissional
			on tbl_profissional.id = tbl_consulta.id_profissional
		inner join tbl_gestante
			on tbl_gestante.id = tbl_consulta.id_gestante
    where tbl_consulta.id = ${id}
    order by id asc;`;

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

  async enviarEmailConsulta(email : string, clinica: Clinica, hora: string, dia: string, medico: Profissional): Promise<{}>{
    
    const gestanteValidation = await this.gestanteService.findEmail(email)
    let message = {}
    if(gestanteValidation){
      let htmlEmail = `

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>E-mail de Redefinição de Senha</title>
</head>
<body style="height: 100vh; margin: 0; padding: 0;  font-family: Arial, sans-serif; background-color: #f3f3f3;">
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
                                                    Olá!
                                                </h2>
                                                <p style="font-size: 0.9rem; color: #464444; width: 80%;">
                                                  Estamos felizes em informar que sua consulta na ${clinica.nome} foi 
                                                  marcada com sucesso! Aqui estão os detalhes da sua consulta:
                                                </p>
                                                <h3 style="font-size: 1.3rem; color: #b6b6f6;">
                                                  Data e Hora: ${dia} e ${hora}
                                                </h3>
                                                <h3 style="font-size: 1.3rem; color: #b6b6f6;">
                                                  Especialidade: ${medico.especialidade}
                                                </h3>
                                                <h3 style="font-size: 1.3rem; color: #b6b6f6;">
                                                  Médico: ${medico.nome}
                                                </h3>
                                                <h3 style="font-size: 1.3rem; color: #b6b6f6;">
                                                  Endereço da Clínica: ${clinica.endereco}
                                                </h3>
                                                <p style="font-size: 0.9rem; color: #464444; width:80%">
                                                  Lembramos que a pontualidade é essencial. 
                                                  Chegue alguns minutos antes da consulta 
                                                  para preenchimento de formulários, se necessário.
                                                </p>
                                                <p style="font-size: 0.9rem; color: #464444; width:80%">
                                                      Se você precisar cancelar ou reagendar a consulta, por favor, entre em contato conosco o mais rápido possível pelo telefone: <h2 style="color: #464444; font-size: 1rem;" >${clinica.telefone}</h2> 
                                                </p>
                                                <h3 style="font-size: 1rem; color: #464444;">
                                                  Desejamos que a sua consulta seja produtiva e tranquila.
                                                </h3>
                                                <h3 style="font-size:1.2rem; color: #b6b6f6;">
                                                  Atenciosamente, ${clinica.nome}
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
        to: email,
        subject: 'Consulta Marcada - Conta Bebê-Vindo',
        text: `Agendamento de Consulta: ${clinica.nome}`,
        html: `${htmlEmail}`
      };
      await transporter.sendMail(mailOptions);
      message = {
        result : 'E-mail da consulta enviada'
      }
    } else{
      message = {
        result : 'Não foi possível enviar o E-mail'
      }
    }
    return message
  }
}
