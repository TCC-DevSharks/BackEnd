import { Injectable } from '@nestjs/common';
import { CreatePagseguroDto, getPag } from './dto/create-pagseguro.dto';
import { log } from 'console';

@Injectable()
export class PagseguroService {
  async create(body: CreatePagseguroDto) {
    const reqs = await fetch('https://sandbox.api.pagseguro.com/orders', {
      method: 'POST',
      headers: {
        Authorization: body.token,
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
            reference_id: body.referenciaItem,
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
            reference_id: body.referenciaCobrança,
            description: body.descricaoCobrança,
            amount: {
              value: body.quantidadeItem * body.valorUnitarioItem,
              currency: 'BRL',
            },
            payment_method: {
              type: body.tipoCartao,
              installments: body.quantidadeParcelas,
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
    console.log(ress.id);
    return ress;
  }

  async findAll(body: getPag) {
    const reqs = await fetch(
      `https://sandbox.api.pagseguro.com/orders/${body.order}`,
      {
        headers: {
          Authorization: body.token,
          accept: 'application/json',
        },
      },
    );

    const res = await reqs.json();
    console.log(res);
    return res;
  }
}
