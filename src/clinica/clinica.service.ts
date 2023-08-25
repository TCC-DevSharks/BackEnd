import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { UpdateClinicaDto } from './dto/update-clinica.dto';
import { PrismaService } from 'src/prisma/prisma.service';

interface CreateClinicaParams {
  id?: number;
  email?: string;
  senha?: string;
  razao_social?: string;
  cnpj?: string;
  foto?: string;
  descricao?: string;
  telefone?: string;
  tipo_telefone?: number;
  id_telefone?: number;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
}

@Injectable()
export class ClinicaService {
  constructor(private prisma: PrismaService) {}

  async validacaoEmail(body: CreateClinicaParams) {
    const query = `select id from tbl_clinica where email = '${body.email}'`;

    const result: [] = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async validacaoCnpj(body: CreateClinicaParams) {
    const query = `select id from tbl_clinica where cnpj = '${body.cnpj}'`;

    const result: [] = await this.prisma.$queryRawUnsafe(query);

    return result;
  }

  async validacaoID(id: number) {
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

  async create(body: CreateClinicaParams) {
    const validacaoEmailExistente = await this.validacaoEmail(body);

    if (validacaoEmailExistente.length == 0) {
      const validacaoCnpjExistente = await this.validacaoCnpj(body);

      if (validacaoCnpjExistente.length === 0) {
        const sql = `select id from tbl_cidade where cidade ="${body.cidade}";`;

        const resultSQLCidade: [] = await this.prisma.$queryRawUnsafe(sql);
        const resultSQLCidadeData = await this.prisma.$queryRawUnsafe(sql);

        if (resultSQLCidade.length !== 0) {
          const queryClinica = `call insertClinica(
            '${body.senha}',
            '${body.email}',
            '${body.cnpj}',
            '${body.foto}',
            '${body.razao_social}',
            '${body.descricao}',
            '${body.telefone}',
            ${body.tipo_telefone},
           '${body.logradouro}',
            '${body.numero}',
            '${body.bairro}',
            '${body.complemento}',
            '${body.cep}',
            ${resultSQLCidadeData[0].id}
            );`;

          const result = await this.prisma.$queryRawUnsafe(queryClinica);

          return result[0].f0;
        }
        const sqlEstado = `select id from tbl_estado where sigla ="${body.estado}";`;

        //Transforma a sigla do estado passado no id do mesmo
        const resultSQLEstadoData = await this.prisma.$queryRawUnsafe(
          sqlEstado,
        );

        const queryCidade = `insert into tbl_cidade(cidade,id_estado)values('${body.cidade}',${resultSQLEstadoData[0].id})`;
        const resultCidade = await this.prisma.$queryRawUnsafe(queryCidade);
        const queryId = 'select LastIdCidades() as cidade;';
        const resultId = await this.prisma.$queryRawUnsafe(queryId);

        const queryClinica = `call insertClinica(
          '${body.senha}',
          '${body.email}',
          '${body.cnpj}',
          '${body.foto}',
          '${body.razao_social}',
          '${body.descricao}',
          '${body.telefone}',
          ${body.tipo_telefone},
         '${body.logradouro}',
          '${body.numero}',
          '${body.bairro}',
          '${body.complemento}',
          '${body.cep}',
          ${resultId[0].cidade}
          );`;

        const result = await this.prisma.$queryRawUnsafe(queryClinica);

        return result[0].f0;
      } else {
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: 'CNPJ já cadastrado',
          },
          HttpStatus.CONFLICT,
        );
      }
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

  async findAll() {
    const sql = `select tbl_clinica.id as id, tbl_clinica.cnpj as cnpj, tbl_clinica.razao_social as razao_social, tbl_clinica.descricao as descricao, tbl_clinica.email as email, tbl_clinica.senha as senha, tbl_clinica.foto as foto,
    tbl_telefone.numero as telefone, tbl_telefone.id as idTelefone, tbl_tipo_telefone.tipo as tipo_telefone, tbl_enderecoClinica.id as idEndereco, tbl_enderecoClinica.logradouro as logradouro, tbl_enderecoClinica.numero as numero, tbl_enderecoClinica.bairro as bairro,
    tbl_enderecoClinica.complemento as complemento, tbl_enderecoClinica.cep as cep, tbl_cidade.cidade as cidade, tbl_estado.nome as estado, tbl_estado.sigla as sigla
    from tbl_clinica
      inner join tbl_clinica_telefone
        on tbl_clinica_telefone.id_clinica = tbl_clinica.id
      inner join tbl_telefone
        on tbl_telefone.id = tbl_clinica_telefone.id_telefone
      inner join tbl_tipo_telefone
        on tbl_tipo_telefone.id = tbl_telefone.id_tipo_telefone
      inner join tbl_enderecoClinica
        on tbl_clinica.id = tbl_enderecoClinica.id_clinica
      inner join tbl_cidade
        on tbl_enderecoClinica.id_cidade = tbl_cidade.id
      inner join tbl_estado
        on tbl_cidade.id_estado = tbl_estado.id
      order by tbl_clinica.id asc;`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findOne(id: number) {
    const sql = `select tbl_clinica.id as id, tbl_clinica.cnpj as cnpj, tbl_clinica.razao_social as razao_social, tbl_clinica.descricao as descricao, tbl_clinica.email as email, tbl_clinica.senha as senha, tbl_clinica.foto as foto,
    tbl_telefone.numero as telefone, tbl_telefone.id as idTelefone, tbl_tipo_telefone.tipo as tipo_telefone, tbl_enderecoClinica.id as idEndereco ,tbl_enderecoClinica.logradouro as logradouro, tbl_enderecoClinica.numero as numero, tbl_enderecoClinica.bairro as bairro,
    tbl_enderecoClinica.complemento as complemento, tbl_enderecoClinica.cep as cep, tbl_cidade.cidade as cidade, tbl_estado.nome as estado, tbl_estado.sigla as sigla
    from tbl_clinica
      inner join tbl_clinica_telefone
        on tbl_clinica_telefone.id_clinica = tbl_clinica.id
      inner join tbl_telefone
        on tbl_telefone.id = tbl_clinica_telefone.id_telefone
      inner join tbl_tipo_telefone
        on tbl_tipo_telefone.id = tbl_telefone.id_tipo_telefone
      inner join tbl_enderecoClinica
        on tbl_clinica.id = tbl_enderecoClinica.id_clinica
      inner join tbl_cidade
        on tbl_enderecoClinica.id_cidade = tbl_cidade.id
      inner join tbl_estado
        on tbl_cidade.id_estado = tbl_estado.id 
        where tbl_clinica.id = ${id}
        order by tbl_clinica.id asc;`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async update(id: number, body: UpdateClinicaDto) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalid';
    }

    const sqlCidade = `select id from tbl_cidade where cidade ="${body.cidade}";`;

    const resultSQLCidade: [] = await this.prisma.$queryRawUnsafe(sqlCidade);
    const resultSQLCidadeData = await this.prisma.$queryRawUnsafe(sqlCidade);

    if (resultSQLCidade.length !== 0) {
      const sql = `call updateClinica(${id},'${body.cnpj}','${body.razao_social}',
        '${body.senha}','${body.email}','${body.descricao}',
        '${body.foto}','${body.telefone}',${body.tipo_telefone},
        ${body.id_telefone},${body.id_endereco},'${body.logradouro}',
        '${body.numero}','${body.bairro}','${body.complemento}','${body.cep}','${resultSQLCidadeData[0].id}');`;

      const result = await this.prisma.$queryRawUnsafe(sql);

      return result;
    }

    const sqlEstado = `select id from tbl_estado where sigla ="${body.estado}";`;

    //Transforma a sigla do estado passado no id do mesmo
    const resultSQLEstadoData = await this.prisma.$queryRawUnsafe(sqlEstado);

    const queryCidade = `insert into tbl_cidade(cidade,id_estado)values('${body.cidade}',${resultSQLEstadoData[0].id})`;
    const resultCidade = await this.prisma.$queryRawUnsafe(queryCidade);

    const queryId = 'select LastIdCidades() as cidade;';
    const resultId = await this.prisma.$queryRawUnsafe(queryId);

    const sql = `call updateClinica(${id},'${body.cnpj}','${body.razao_social}',
      '${body.senha}','${body.email}','${body.descricao}',
      '${body.foto}','${body.telefone}',${body.tipo_telefone},
      ${body.id_telefone},${body.id_endereco},'${body.logradouro}',
      '${body.numero}','${body.bairro}','${body.complemento}','${body.cep}','${resultId[0].cidade}');`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async remove(id: number) {
    const valId = await this.validacaoID(id);
    console.log(valId);
    

    if (valId == false) {
      return 'Id Invalid';
    }
    const query = `call deleteClinica(${id})`;

    const result = this.prisma.$queryRawUnsafe(query);
    return result;
  }
}
