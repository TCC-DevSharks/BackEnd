import { Injectable } from '@nestjs/common';
import { CreatePagseguroDto, getPag } from './dto/create-pagseguro.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { log } from 'console';

@Injectable()
export class PagseguroService {
  constructor(private prisma: PrismaService) {}

  async validacaoIDGestante(id: number) {
    const sqlValidacaoId = `select * from tbl_gestante where id =${id};`;
    const resultValidacaoId: [] = await this.prisma.$queryRawUnsafe(
      sqlValidacaoId,
    );

    if (resultValidacaoId.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async validacaoIDClinica(id: number) {
    const sqlValidacaoId = `select * from tbl_clinica where id =${id};`;
    const resultValidacaoId: [] = await this.prisma.$queryRawUnsafe(
      sqlValidacaoId,
    );

    if (resultValidacaoId.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async create(body: CreatePagseguroDto) {
    const valIdGestante = await this.validacaoIDGestante(body.id_gestante);
    const valIdClinica = await this.validacaoIDClinica(body.id_clinica);

    //Valida se o Id passado é válido
    if (valIdClinica == false) {
      return {
        message: 'Id Clinica Invalido',
      };
    }

    //Valida se o Id passado é válido
    if (valIdGestante == false) {
      return {
        message: 'Id Gestante Invalido',
      };
    }
    console.log(body.telefone);

    const reqs = await fetch('https://sandbox.api.pagseguro.com/orders', {
      method: 'POST',
      headers: {
        Authorization: '0CF19CC6A6F74BF1988A099C7129AB6C',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        reference_id: 'ex-00001',
        customer: {
          name: body.nome,
          email: body.email,
          tax_id: body.cpf,
          phones: [
            {
              country: body.dddPais,
              area: body.ddd,
              number: body.telefone,
              type: 'MOBILE',
            },
          ],
        },
        items: [
          {
            reference_id: 'Item',
            name: body.nomeItem,
            quantity: body.quantidadeItem,
            unit_amount: body.valorUnitarioItem,
          },
        ],
        shipping: {
          address: {
            street: body.logradouro,
            number: body.numero,
            complement: body.complemento,
            locality: body.bairro,
            city: body.cidade,
            region_code: body.estado,
            country: body.pais,
            postal_code: body.cep,
          },
        },
        notification_urls: ['https://meusite.com/notificacoes'],
        charges: [
          {
            reference_id: body.referenciaCobranca,
            description: body.descricaoCobranca,
            amount: {
              value: body.quantidadeItem * body.valorUnitarioItem,
              currency: 'BRL',
            },
            payment_method: {
              type: body.tipoCartao,
              installments: 1,
              capture: true,
              card: {
                number: body.numeroCartao,
                exp_month: body.mesVencimento,
                exp_year: body.anoVencimento,
                security_code: body.cdd,
                holder: {
                  name: body.nome,
                },
                store: false,
              },
            },
          },
        ],
      }),
    });

    const ress = await reqs.json();

    console.log(ress);
    

    // const result = {
    //   ordem: ress.id,
    //   horario: ress.created_at,
    //   valor: ress.charges[0].amount.value,
    //   operacao: ress.charges[0].payment_response,
    //   cartao: ress.charges[0].payment_method,
    // };

    console.log(body.cpf);
    console.log(body.telefone);
    

    const sql = `insert into tbl_transacao(id_gestante,id_clinica,ordem, dia)values(${body.id_gestante}, ${body.id_clinica}, "${ress.id}", "${ress.created_at}" )`;

    await this.prisma.$queryRawUnsafe(sql);
    return ress;
  }

  async findOne(body: getPag) {
    const reqs = await fetch(
      `https://sandbox.api.pagseguro.com/orders/${body.order}`,
      {
        headers: {
          Authorization: '0CF19CC6A6F74BF1988A099C7129AB6C',
          accept: 'application/json',
        },
      },
    );

    const res = await reqs.json();
    return res;
  }

  async findAll( id_gestante: number) {
    const sql = `select tbl_transacao.ordem as ordem, tbl_clinica.razao_social as clinica, tbl_gestante.nome as gestante, tbl_transacao.dia as data
      from tbl_transacao
        inner join tbl_gestante
          on tbl_transacao.id_gestante = tbl_gestante.id
        inner join tbl_clinica
          on tbl_transacao.id_clinica = tbl_clinica.id
          where tbl_gestante.id = ${id_gestante}`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }
}
