import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import { PrismaService } from 'src/prisma/prisma.service';

interface CreateProfissionalParams {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  crm: string;
  data_nascimento: string;
  foto: string;
  descricao: string;
  inicio_atendimento: string;
  fim_atendimento: string;
  id_sexo: number;
  id_clinica: number;
  telefone: string;
  tipo_telefone: number;
  id_endereco: number;
  id_telefone: number;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

@Injectable()
export class ProfissionalService {
  constructor(private prisma: PrismaService) {}

  async validacaoEmail(body: CreateProfissionalParams) {
    const query = `select id from tbl_profissional where email = '${body.email}'`;

    const result: [] = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async validacaoID(id: number) {
    const sqlValidacaoId = `select * from tbl_profissional where id =${id};`;
    const resultValidacaoId: [] = await this.prisma.$queryRawUnsafe(
      sqlValidacaoId,
    );

    if (resultValidacaoId.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async create(body: CreateProfissionalDto) {
    const validacaoEmailExistente = await this.validacaoEmail(body);

    if (validacaoEmailExistente.length === 0) {
      const sql = `select id from tbl_cidade where cidade ="${body.cidade}";`;

      const resultSQLCidade: [] = await this.prisma.$queryRawUnsafe(sql);
      const resultSQLCidadeData = await this.prisma.$queryRawUnsafe(sql);
      if (resultSQLCidade.length !== 0) {
        const queryProfissional = ` call insertProfissional(
          '${body.senha}',
          '${body.email}',
          '${body.cpf}',
          '${body.foto}',
          '${body.nome}',
          '${body.descricao}',
          '${body.data_nascimento}',
          '${body.inicio_atendimento}',
          '${body.fim_atendimento}',
          '${body.crm}',
          ${body.id_sexo},
          ${body.id_clinica},
          '${body.telefone}',
          ${body.tipo_telefone},
          '${body.logradouro}',
          '${body.numero}',
          '${body.bairro}',
          '${body.complemento}',
          '${body.cep}',
          '${resultSQLCidadeData[0].id}',
          ${body.id_especialidade}
        );`;

        const result = await this.prisma.$queryRawUnsafe(queryProfissional);

        return result[0].f0;
      }

      const sqlEstado = `select id from tbl_estado where sigla ="${body.estado}";`;

      //Transforma a sigla do estado passado no id do mesmo
      const resultSQLEstadoData = await this.prisma.$queryRawUnsafe(sqlEstado);

      const queryCidade = `insert into tbl_cidade(cidade,id_estado)values('${body.cidade}',${resultSQLEstadoData[0].id})`;
      const resultCidade = await this.prisma.$queryRawUnsafe(queryCidade);
      const queryId = 'select LastIdCidades() as cidade;';
      const resultId = await this.prisma.$queryRawUnsafe(queryId);

      const queryProfissional = ` call insertProfissional(
        '${body.senha}',
        '${body.email}',
        '${body.cpf}',
        '${body.foto}',
        '${body.nome}',
        '${body.descricao}',
        '${body.data_nascimento}',
        '${body.inicio_atendimento}',
        '${body.fim_atendimento}',
        '${body.crm}',
        ${body.id_sexo},
        ${body.id_clinica},
        '${body.telefone}',
        ${body.tipo_telefone},
        '${body.logradouro}',
        '${body.numero}',
        '${body.bairro}',
        '${body.complemento}',
        '${body.cep}',
        '${resultId[0].cidade}',
        ${body.id_especialidade}
      );`;

      const result = await this.prisma.$queryRawUnsafe(queryProfissional);

      return result[0].f0;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'Email já cadastrado',
        },
        HttpStatus.CONFLICT,
      );
    }
  }

  findAll() {
    const sql = `select tbl_profissional.id as id, tbl_profissional.nome as nome, tbl_profissional.cpf as cpf, tbl_profissional.crm as crm, date_format(tbl_profissional.data_nascimento, '%d/%m/%Y') as data_nascimento,
    tbl_profissional.foto as foto, time_format(tbl_profissional.inicio_atendimento,'%H:%i:0%s') as inicio_atendimento, time_format(tbl_profissional.fim_atendimento,'%H:%i:0%s') as fim_atendimento, tbl_profissional.email as email, tbl_profissional.senha as senha,
    tbl_sexo.sexo as sexo, tbl_clinica.razao_social as clinica,
    tbl_telefone.id as idTelefone, tbl_telefone.numero as telefone, tbl_tipo_telefone.tipo as tipo_telefone,tbl_enderecoProfissional.id as idEndereco, tbl_enderecoProfissional.logradouro as logradouro, tbl_enderecoProfissional.numero as numero, tbl_enderecoProfissional.bairro as bairro,
    tbl_enderecoProfissional.complemento as complemento, tbl_enderecoProfissional.cep as cep, tbl_cidade.cidade as cidade, tbl_estado.nome as estado, tbl_estado.sigla as sigla,
    tbl_especialidade.nome as especialidade
    from tbl_profissional 
      inner join tbl_telefone_profissional
        on tbl_telefone_profissional.id_profissional = tbl_profissional.id
      inner join tbl_telefone
        on tbl_telefone.id = tbl_telefone_profissional.id_telefone
      inner join tbl_tipo_telefone
        on tbl_tipo_telefone.id = tbl_telefone.id_tipo_telefone
      inner join tbl_enderecoProfissional
        on tbl_profissional.id = tbl_enderecoProfissional.id_profissional
      inner join tbl_cidade
        on tbl_enderecoProfissional.id_cidade = tbl_cidade.id
      inner join tbl_estado
        on tbl_cidade.id_estado = tbl_estado.id
      inner join tbl_sexo
        on tbl_sexo.id = tbl_profissional.id_sexo
      inner join tbl_clinica
        on tbl_clinica.id = tbl_profissional.id_clinica
      inner join tbl_profissional_especialidade
        on tbl_profissional.id = tbl_profissional_especialidade.id_profissional
      inner join tbl_especialidade
        on tbl_especialidade.id = tbl_profissional_especialidade.id_especialidade
      order by tbl_profissional.id asc;`;

    const result = this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  findOne(id: number) {
    const sql = `select tbl_profissional.id as id, tbl_profissional.nome as nome, tbl_profissional.cpf as cpf, tbl_profissional.crm as crm, date_format(tbl_profissional.data_nascimento, '%d/%m/%Y') as data_nascimento,
    tbl_profissional.foto as foto, time_format(tbl_profissional.inicio_atendimento,'%H:%i:0%s') as inicio_atendimento, time_format(tbl_profissional.fim_atendimento,'%H:%i:0%s') as fim_atendimento, tbl_profissional.email as email, tbl_profissional.senha as senha,
    tbl_sexo.sexo as sexo, tbl_clinica.razao_social as clinica,
    tbl_telefone.id as idTelefone, tbl_telefone.numero as telefone, tbl_tipo_telefone.tipo as tipo_telefone,tbl_enderecoProfissional.id as idEndereco, tbl_enderecoProfissional.logradouro as logradouro, tbl_enderecoProfissional.numero as numero, tbl_enderecoProfissional.bairro as bairro,
    tbl_enderecoProfissional.complemento as complemento, tbl_enderecoProfissional.cep as cep, tbl_cidade.cidade as cidade, tbl_estado.nome as estado, tbl_estado.sigla as sigla,
    tbl_especialidade.nome as especialidade
    from tbl_profissional 
      inner join tbl_telefone_profissional
        on tbl_telefone_profissional.id_profissional = tbl_profissional.id
      inner join tbl_telefone
        on tbl_telefone.id = tbl_telefone_profissional.id_telefone
      inner join tbl_tipo_telefone
        on tbl_tipo_telefone.id = tbl_telefone.id_tipo_telefone
      inner join tbl_enderecoProfissional
        on tbl_profissional.id = tbl_enderecoProfissional.id_profissional
      inner join tbl_cidade
        on tbl_enderecoProfissional.id_cidade = tbl_cidade.id
      inner join tbl_estado
        on tbl_cidade.id_estado = tbl_estado.id
      inner join tbl_sexo
        on tbl_sexo.id = tbl_profissional.id_sexo
      inner join tbl_clinica
        on tbl_clinica.id = tbl_profissional.id_clinica
      inner join tbl_profissional_especialidade
        on tbl_profissional.id = tbl_profissional_especialidade.id_profissional
      inner join tbl_especialidade
        on tbl_especialidade.id = tbl_profissional_especialidade.id_especialidade
      where tbl_profissional.id = ${id}
      order by tbl_profissional.id asc;`;

    const result = this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async update(id: number, body: UpdateProfissionalDto) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalid';
    }
    const sqlCidade = `select id from tbl_cidade where cidade ="${body.cidade}";`;

    const resultSQLCidade: [] = await this.prisma.$queryRawUnsafe(sqlCidade);
    const resultSQLCidadeData = await this.prisma.$queryRawUnsafe(sqlCidade);

    if (resultSQLCidade.length !== 0) {
      const sql = `call updateProfissional('${id}',
      '${body.senha}',
      '${body.email}',
      '${body.cpf}',
      '${body.foto}',
      '${body.nome}',
      '${body.descricao}',
      '${body.data_nascimento}',
      '${body.inicio_atendimento}',
      '${body.fim_atendimento}',
      '${body.crm}',
      ${body.id_sexo},
      ${body.id_clinica},
      '${body.telefone}',
      ${body.tipo_telefone},
      ${body.id_telefone},
      ${body.id_endereco},
      '${body.logradouro}',
      '${body.numero}',
      '${body.bairro}',
      '${body.complemento}',
      '${body.cep}',
      '${resultSQLCidadeData[0].id}');`;

      const result = await this.prisma.$queryRawUnsafe(sql);

      return result[0].f0;
    }

    const sqlEstado = `select id from tbl_estado where sigla ="${body.estado}";`;

    //Transforma a sigla do estado passado no id do mesmo
    const resultSQLEstadoData = await this.prisma.$queryRawUnsafe(sqlEstado);

    const queryCidade = `insert into tbl_cidade(cidade,id_estado)values('${body.cidade}',${resultSQLEstadoData[0].id})`;
    const resultCidade = await this.prisma.$queryRawUnsafe(queryCidade);

    const queryId = 'select LastIdCidades() as cidade;';
    const resultId = await this.prisma.$queryRawUnsafe(queryId);

    const sql = `call updateProfissional('${id}',
      '${body.senha}',
      '${body.email}',
      '${body.cpf}',
      '${body.foto}',
      '${body.nome}',
      '${body.descricao}',
      '${body.data_nascimento}',
      '${body.inicio_atendimento}',
      '${body.fim_atendimento}',
      '${body.crm}',
      ${body.id_sexo},
      ${body.id_clinica},
      '${body.telefone}',
      ${body.tipo_telefone},
      ${body.id_telefone},
      ${body.id_endereco},
      '${body.logradouro}',
      '${body.numero}',
      '${body.bairro}',
      '${body.complemento}',
      '${body.cep}',
      '${resultId[0].cidade}');`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result[0].f0;
  }

  async remove(id: number) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalid';
    }
    const query = `call deleteProfissional(${id})`;

    const result = this.prisma.$queryRawUnsafe(query);
    return result;
  }
}
