import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

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
  numero: string;
  complemento: string;
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
      const saltOrRounds = 10;
      const password = body.senha;
      const hash = await bcrypt.hash(password, saltOrRounds);

      const queryProfissional = ` call procInsertProfissional(
          '${hash}',
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
          '${body.numero}',
          '${body.complemento}',
          '${body.cep}',
          ${body.id_especialidade}
        );`;

      const result = await this.prisma.$queryRawUnsafe(queryProfissional);

      return result;
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
    tbl_telefone.id as idTelefone, tbl_telefone.numero as telefone, tbl_tipo_telefone.tipo as tipo_telefone,tbl_endereco_Profissional.id as idEndereco, tbl_endereco_Profissional.numero as numero,
    tbl_endereco_Profissional.complemento as complemento, tbl_endereco_Profissional.cep as cep,
    tbl_especialidade.nome as especialidade
    from tbl_profissional 
      inner join tbl_telefone_profissional
        on tbl_telefone_profissional.id_profissional = tbl_profissional.id
      inner join tbl_telefone
        on tbl_telefone.id = tbl_telefone_profissional.id_telefone
      inner join tbl_tipo_telefone
        on tbl_tipo_telefone.id = tbl_telefone.id_tipo_telefone
      inner join tbl_endereco_Profissional
        on tbl_profissional.id = tbl_endereco_Profissional.id_profissional
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

  async findOne(id: number) {
    const sql = `select tbl_profissional.id as id, tbl_profissional.nome as nome, tbl_profissional.cpf as cpf, tbl_profissional.crm as crm, date_format(tbl_profissional.data_nascimento, '%d/%m/%Y') as data_nascimento,
    tbl_profissional.foto as foto, time_format(tbl_profissional.inicio_atendimento,'%H:%i:0%s') as inicio_atendimento, time_format(tbl_profissional.fim_atendimento,'%H:%i:0%s') as fim_atendimento, tbl_profissional.email as email, tbl_profissional.senha as senha,
    tbl_sexo.sexo as sexo, tbl_clinica.razao_social as clinica, tbl_telefone.numero as clinica_telefone, tbl_enderecoClinica.cep  as clinica_endereco, tbl_enderecoClinica.numero as clinica_numero, tbl_enderecoCLinica.complemento as clinica_complemento,
    tbl_telefone.id as idTelefone, tbl_telefone.numero as telefone, tbl_tipo_telefone.tipo as tipo_telefone,tbl_endereco_Profissional.id as idEndereco, tbl_endereco_Profissional.numero as numero,
    tbl_endereco_Profissional.complemento as complemento, tbl_endereco_Profissional.cep as cep,
    tbl_especialidade.nome as especialidade
    from tbl_profissional 
      inner join tbl_telefone_profissional
        on tbl_telefone_profissional.id_profissional = tbl_profissional.id
      inner join tbl_telefone
        on tbl_telefone.id = tbl_telefone_profissional.id_telefone
      inner join tbl_tipo_telefone
        on tbl_tipo_telefone.id = tbl_telefone.id_tipo_telefone
      inner join tbl_endereco_Profissional
        on tbl_profissional.id = tbl_endereco_Profissional.id_profissional
      inner join tbl_sexo
        on tbl_sexo.id = tbl_profissional.id_sexo
      inner join tbl_clinica
        on tbl_clinica.id = tbl_profissional.id_clinica
      inner join tbl_profissional_especialidade
        on tbl_profissional.id = tbl_profissional_especialidade.id_profissional
      inner join tbl_especialidade
        on tbl_especialidade.id = tbl_profissional_especialidade.id_especialidade
        inner join tbl_clinica_telefone
        on tbl_clinica_telefone.id_clinica = tbl_clinica.id
      inner join tbl_enderecoClinica
        on tbl_clinica.id = tbl_enderecoClinica.id_clinica
      where tbl_profissional.id = ${id}
      order by tbl_profissional.id asc;`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  findSpeciality(id: number) {
    const sql = `select tbl_profissional.id as id, tbl_profissional.nome as nome, tbl_profissional.cpf as cpf, tbl_profissional.crm as crm, date_format(tbl_profissional.data_nascimento, '%d/%m/%Y') as data_nascimento,
    tbl_profissional.foto as foto,tbl_profissional.descricao as descricao, time_format(tbl_profissional.inicio_atendimento,'%H:%i:0%s') as inicio_atendimento, time_format(tbl_profissional.fim_atendimento,'%H:%i:0%s') as fim_atendimento, tbl_profissional.email as email, tbl_profissional.senha as senha,
    tbl_sexo.sexo as sexo, tbl_clinica.razao_social as clinica,
    tbl_telefone.id as idTelefone, tbl_telefone.numero as telefone, tbl_tipo_telefone.tipo as tipo_telefone,tbl_endereco_Profissional.id as idEndereco, tbl_endereco_Profissional.numero as numero,
    tbl_endereco_Profissional.complemento as complemento, tbl_endereco_Profissional.cep as cep,
    tbl_especialidade.nome as especialidade
    from tbl_profissional 
      inner join tbl_telefone_profissional
        on tbl_telefone_profissional.id_profissional = tbl_profissional.id
      inner join tbl_telefone
        on tbl_telefone.id = tbl_telefone_profissional.id_telefone
      inner join tbl_tipo_telefone
        on tbl_tipo_telefone.id = tbl_telefone.id_tipo_telefone
      inner join tbl_endereco_Profissional
        on tbl_profissional.id = tbl_endereco_Profissional.id_profissional
      inner join tbl_sexo
        on tbl_sexo.id = tbl_profissional.id_sexo
      inner join tbl_clinica
        on tbl_clinica.id = tbl_profissional.id_clinica
      inner join tbl_profissional_especialidade
        on tbl_profissional.id = tbl_profissional_especialidade.id_profissional
      inner join tbl_especialidade
        on tbl_especialidade.id = tbl_profissional_especialidade.id_especialidade
      where tbl_especialidade.id = ${id};`;

    const result = this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async update(id: number, body: UpdateProfissionalDto) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalid';
    }
    const saltOrRounds = 10;
    const password = body.senha;
    const hash = await bcrypt.hash(password, saltOrRounds);
    const sql = `call procUpdateProfissional('${id}',
      '${hash}',
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
      '${body.numero}',
      '${body.complemento}',
      '${body.cep}');`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result[0].f0;
  }

  async remove(id: number) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalid';
    }
    const query = `call procDeleteProfissional(${id})`;

    const result = this.prisma.$queryRawUnsafe(query);
    return result;
  }

  async findPregnants(id: number){

    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalid';
    }
    
    const sql = `select tbl_gestante.nome, tbl_gestante.semana_gestacao, tbl_gestante.foto, tbl_gestante.altura as altura, tbl_gestante.peso as peso, tbl_gestante.data_nascimento, tbl_especialidade.nome as especialidade,
    date_format(tbl_consulta.dia, '%d/%m/%Y') as dia, time_format(tbl_consulta.hora,'%H:%i:0%s') as hora
    from tbl_gestante
      inner join tbl_consulta
        on tbl_consulta.id_gestante = tbl_gestante.id
      inner join tbl_profissional
        on tbl_profissional.id = tbl_consulta.id_profissional
        inner join tbl_profissional_especialidade
        on tbl_profissional.id = tbl_profissional_especialidade.id_profissional
      inner join tbl_especialidade
        on tbl_especialidade.id = tbl_profissional_especialidade.id_especialidade
    where tbl_profissional.id = ${id}`

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result
  }
}
