import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateGestanteDto } from './dto/update-gestante.dto';

interface CreateGestanteParams {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  cpf?: string;
  peso?: number;
  altura?: number;
  data_nascimento: string;
  semana_gestacao: number;
  data_parto: string;
  foto?: string;
  telefone: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
}

@Injectable()
export class GestanteService {
  constructor(private prisma: PrismaService) {}

  async validacaoEmail(body: CreateGestanteParams) {
    const query = `select id from tbl_gestante where email = '${body.email}'`;

    const result: [] = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async validacaoCpf(body: CreateGestanteParams) {
    const query = `select id from tbl_gestante where cpf = '${body.cpf}'`;

    const result: [] = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async validacaoID(id: number) {
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

  async create(body: CreateGestanteParams) {
    const queryGestante = `call insertGestante(
      '${body.nome}', 
      '${body.data_nascimento}',
      '${body.senha}',
      '${body.email}',
      '${body.cpf}',
      ${body.peso},
      ${body.altura},
      ${body.semana_gestacao},
      '${body.data_parto}',
      '${body.foto}',
      '${body.telefone}');`;

    const idQueryGestante = `select LastIdGestante() as id`;

    const validacaoEmail: [] = await this.validacaoEmail(body);

    if (validacaoEmail.length == 0) {
      await this.prisma.$queryRawUnsafe(queryGestante);

      const result = await this.prisma.$queryRawUnsafe(idQueryGestante);

      return Number(result[0].id);
    } else {
      throw new HttpException(
        'Já existe um usuário cadastrado com este email',
        HttpStatus.CONFLICT,
      );
    }
  }

  async findAll() {
    const query = `select tbl_gestante.id, tbl_gestante.nome as nome, date_format(tbl_gestante.data_nascimento, '%d/%m/%Y') as data_nascimento,
    tbl_gestante.email as email,tbl_gestante.senha as senha, tbl_gestante.cpf as cpf, tbl_gestante.peso as peso, tbl_gestante.altura as altura,
    date_format(tbl_gestante.data_parto, '%d/%m/%Y') as data_parto, tbl_gestante.foto as foto, tbl_gestante.semana_gestacao,
    tbl_gestante.telefone as telefone
   from tbl_gestante
       order by tbl_gestante.id asc;`;

    const result = await this.prisma.$queryRawUnsafe(query);
    return result;
  }

  findOne(id: number) {
    const query = `select tbl_gestante.id, tbl_gestante.nome as nome, date_format(tbl_gestante.data_nascimento, '%d/%m/%Y') as data_nascimento,
    tbl_gestante.email as email,tbl_gestante.senha as senha, tbl_gestante.cpf as cpf, tbl_gestante.peso as peso, tbl_gestante.altura as altura,
    date_format(tbl_gestante.data_parto, '%d/%m/%Y') as data_parto, tbl_gestante.foto as foto, tbl_gestante.semana_gestacao,
    tbl_gestante.telefone as telefone
    from tbl_gestante
    where tbl_gestante.id = ${id}
    order by tbl_gestante.id asc`;

    const result = this.prisma.$queryRawUnsafe(query);
    return result;
  }

  async update(id: number, body: UpdateGestanteDto) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return {
        message: 'Id Invalid',
      };
    }
    const queryGestante = `call updateGestante(
      ${id},
      '${body.nome}', 
      '${body.data_nascimento}',
      '${body.senha}',
      '${body.email}',
      '${body.cpf}',
      ${body.peso},
      ${body.altura},
      ${body.semana_gestacao},
      '${body.data_parto}',
      '${body.foto}',
      '${body.telefone}');`;

    const result = await this.prisma.$queryRawUnsafe(queryGestante);
    return result[0].f0;
  }

  async insertEndress(id: number, body: UpdateGestanteDto) {
    const valId = await this.validacaoID(id);

    //Valida se o Id passado é válido
    if (valId == false) {
      return {
        message: 'Id Invalid',
      };
    }

    const sql = `select id from tbl_cidade where cidade ="${body.cidade}";`;

    const resultSQLCidade: [] = await this.prisma.$queryRawUnsafe(sql);
    const resultSQLCidadeData = await this.prisma.$queryRawUnsafe(sql);

    if (resultSQLCidade.length !== 0) {
      const queryGestante = `call updateGestanteEndereco(
        ${id},
        '${body.nome}', 
        '${body.data_nascimento}',
        '${body.senha}',
        '${body.email}',
        '${body.cpf}',
        ${body.peso},
        ${body.altura},
        ${body.semana_gestacao},
        '${body.data_parto}',
        '${body.foto}',
        '${body.telefone}',
       '${body.logradouro}',
        '${body.numero}',
        '${body.bairro}',
        '${body.complemento}',
        '${body.cep}',
        ${resultSQLCidadeData[0].id}
        );`;

      const result = await this.prisma.$queryRawUnsafe(queryGestante);

      return result[0].f0;
    }

    const sqlEstado = `select id from tbl_estado where sigla ="${body.estado}";`;

    //Transforma a sigla do estado passado no id do mesmo
    const resultSQLEstadoData = await this.prisma.$queryRawUnsafe(sqlEstado);

    const queryCidade = `insert into tbl_cidade(cidade,id_estado)values('${body.cidade}',${resultSQLEstadoData[0].id})`;
    const resultCidade = await this.prisma.$queryRawUnsafe(queryCidade);
    const queryId = 'select LastIdCidades() as cidade;';
    const resultId = await this.prisma.$queryRawUnsafe(queryId);

    const queryGestante = `call updateGestanteEndereco(
      ${id},
      '${body.nome}', 
      '${body.data_nascimento}',
      '${body.senha}',
      '${body.email}',
      '${body.cpf}',
      ${body.peso},
      ${body.altura},
      ${body.semana_gestacao},
      '${body.data_parto}',
      '${body.foto}',
      '${body.telefone}',
     '${body.logradouro}',
      '${body.numero}',
      '${body.bairro}',
      '${body.complemento}',
      '${body.cep}',
      ${resultId[0].cidade}
      );`;

    const result = await this.prisma.$queryRawUnsafe(queryGestante);

    return result[0].f0;
  }

  async findEndress(id: number) {
    const sql = `select tbl_endereco_gestante.id as id, tbl_endereco_gestante.logradouro as logradouro, 
    tbl_endereco_gestante.numero as numero, tbl_endereco_gestante.complemento as complemento, 
    tbl_endereco_gestante.cep as cep, tbl_cidade.cidade as cidade, tbl_estado.nome as estado
    from tbl_endereco_gestante
      inner join tbl_cidade
        on tbl_endereco_gestante.id_cidade = tbl_cidade.id
        inner join tbl_estado
        on tbl_cidade.id_estado = tbl_estado.id
        where tbl_endereco_gestante.id_gestante = ${id};`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  remove(id: number) {
    const query = `call deleteGestante(${id})`;

    const result = this.prisma.$queryRawUnsafe(query);
    return result;
  }
}
