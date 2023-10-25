import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateClinicaDto } from './dto/update-clinica.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

interface CreateClinicaParams {
  email: string;
  senha: string;
  razao_social: string;
  cnpj: string;
  foto: string;
  descricao: string;
  telefone: string;
  tipo_telefone: number;
  numero: string;
  complemento: string;
  cep: string;
}

@Injectable()
export class ClinicaService {
  constructor(private prisma: PrismaService) {}

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

  async findEmail(email: string){
    const query = `select * from tbl_clinica where email = '${email}'`
    const resultQuery = await this.prisma.$queryRawUnsafe(query);
    let result = {}

    
    if(resultQuery){
      
        return resultQuery[0]
      } else{
        result = {
          message: 'Clinica não encontrada',
          status: HttpStatus.INTERNAL_SERVER_ERROR
      }
    }      
  }

  async create(body: CreateClinicaParams) {
    const validacaoCnpjExistente = await this.validacaoCnpj(body);

    if (validacaoCnpjExistente.length === 0) {
      const saltOrRounds = 10;
      const password = body.senha;
      const hash = await bcrypt.hash(password, saltOrRounds);

      const queryClinica = `call procInsertClinica(
            '${hash}',
            '${body.email}',
            '${body.cnpj}',
            '${body.foto}',
            '${body.razao_social}',
            '${body.descricao}',
            '${body.telefone}',
            ${body.tipo_telefone},
            '${body.numero}',
            '${body.complemento}',
            '${body.cep}'
            );`;

      console.log(hash);
      const isMatch = await bcrypt.compare(password, hash);
      console.log(isMatch);

      const result = await this.prisma.$queryRawUnsafe(queryClinica);
      console.log(result);

      return result[0].f0 + `. id: ${result[0].f1}`;
    }
    throw new HttpException(
      {
        status: HttpStatus.CONFLICT,
        error: 'CNPJ já cadastrado',
      },
      HttpStatus.CONFLICT,
    );
  }

  async findAll() {
    const sql = `select tbl_clinica.id as id, tbl_clinica.cnpj as cnpj, tbl_clinica.razao_social as razao_social, tbl_clinica.descricao as descricao, tbl_clinica.email as email, tbl_clinica.senha as senha, tbl_clinica.foto as foto,
    tbl_telefone.numero as telefone, tbl_telefone.id as idTelefone, tbl_tipo_telefone.tipo as tipo_telefone, tbl_enderecoClinica.id as idEndereco, tbl_enderecoClinica.numero as numero, tbl_enderecoCLinica.complemento as complemento,
    tbl_enderecoClinica.cep as cep
    from tbl_clinica
      inner join tbl_clinica_telefone
        on tbl_clinica_telefone.id_clinica = tbl_clinica.id
      inner join tbl_telefone
        on tbl_telefone.id = tbl_clinica_telefone.id_telefone
      inner join tbl_tipo_telefone
        on tbl_tipo_telefone.id = tbl_telefone.id_tipo_telefone
      inner join tbl_enderecoClinica
        on tbl_clinica.id = tbl_enderecoClinica.id_clinica
      order by tbl_clinica.id asc;`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findOne(id: number) {
    const sql = `select tbl_clinica.id as id, tbl_clinica.cnpj as cnpj, tbl_clinica.razao_social as razao_social, tbl_clinica.descricao as descricao, tbl_clinica.email as email, tbl_clinica.senha as senha, tbl_clinica.foto as foto,
    tbl_telefone.numero as telefone, tbl_telefone.id as idTelefone, tbl_tipo_telefone.tipo as tipo_telefone, tbl_enderecoClinica.id as idEndereco, tbl_enderecoClinica.numero as numero, tbl_enderecoCLinica.complemento as complemento,
    tbl_enderecoClinica.cep as cep
    from tbl_clinica
      inner join tbl_clinica_telefone
        on tbl_clinica_telefone.id_clinica = tbl_clinica.id
      inner join tbl_telefone
        on tbl_telefone.id = tbl_clinica_telefone.id_telefone
      inner join tbl_tipo_telefone
        on tbl_tipo_telefone.id = tbl_telefone.id_tipo_telefone
      inner join tbl_enderecoClinica
        on tbl_clinica.id = tbl_enderecoClinica.id_clinica
        where tbl_clinica.id = ${id};`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  findSpeciality(id: number) {
    const sql = `select tbl_clinica.id, tbl_clinica.razao_social, tbl_clinica.foto, tbl_clinica.descricao,tbl_enderecoClinica.cep
    from tbl_clinica
      inner join tbl_profissional
        on tbl_profissional.id_clinica = tbl_clinica.id
      inner join tbl_profissional_especialidade
        on tbl_profissional_especialidade.id_profissional = tbl_profissional.id
      inner join tbl_especialidade
        on tbl_profissional_especialidade.id_especialidade = tbl_especialidade.id
      inner join tbl_enderecoClinica
        on tbl_enderecoClinica.id_clinica = tbl_clinica.id   
            where tbl_especialidade.id = ${id};`;

    const result = this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async findProfessional(id: number){

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
      where tbl_clinica.id = ${id};`;

      const result = await this.prisma.$queryRawUnsafe(sql)

      return result

  }

  async findQuantity(id: number) {
    const sqlQuantityPregnants = `SELECT COUNT(DISTINCT id_gestante) as quantidade
    from tbl_consulta
      inner join tbl_profissional
        on tbl_consulta.id_profissional = tbl_profissional.id
      inner join tbl_clinica
        on tbl_clinica.id = tbl_profissional.id_clinica
          where tbl_clinica.id = ${id}`;

    const resultQuantityPregnants: [] = await this.prisma.$queryRawUnsafe(sqlQuantityPregnants);

    const replacer = (key, value) => typeof value === 'bigint' ? value.toString() : value;
    const dataPregnants = resultQuantityPregnants
      const stringified = JSON.stringify(dataPregnants, replacer);

      let split = stringified.slice(16, -3);

      const sqlQuantityConsultDaily = `SELECT tbl_consulta.dia
      from tbl_consulta
        inner join tbl_profissional
          on tbl_consulta.id_profissional = tbl_profissional.id
        inner join tbl_clinica
          on tbl_clinica.id = tbl_profissional.id_clinica
            where tbl_clinica.id = ${id}`;
  
      const resultQuantityConsultDaily: [] = await this.prisma.$queryRawUnsafe(sqlQuantityConsultDaily);
  
      const dataAtual = new Date()
      var list = []
      
      resultQuantityConsultDaily.map((it: { dia: string }) => {
        const data = new Date(it.dia);
        if (dataAtual.getDate() === data.getDate() + 1 && dataAtual.getMonth() === data.getMonth() && dataAtual.getFullYear() === data.getFullYear()) {
          console.log(data)
          list.push(it)
        }
      });

      const sqlQuantityProfessional = `SELECT tbl_profissional.id
      from tbl_profissional
        inner join tbl_clinica
          on tbl_profissional.id_clinica = tbl_clinica.id
    where tbl_clinica.id = ${id};`;
  
      const resultQuantityProfessionals: [] = await this.prisma.$queryRawUnsafe(sqlQuantityProfessional);

      const sqlComposition = `SELECT tbl_profissional.id
      from tbl_profissional
        inner join tbl_clinica
          on tbl_profissional.id_clinica = tbl_clinica.id
    inner join tbl_sexo
      on tbl_sexo.id = tbl_profissional.id_sexo
    where tbl_sexo.sigla = "F" and tbl_clinica.id = ${id};`;
  
      const resultComposition: [] = await this.prisma.$queryRawUnsafe(sqlComposition);

    return {
      pacientes_cadastrados: split,
      consultas_diarias: list.length,
      profissionais_cadastrados: resultQuantityProfessionals.length,
      profissionais_femininos: resultComposition.length,
      profissionais_masculinos: resultQuantityProfessionals.length - resultComposition.length
    }
  }


  async update(id: number, body: UpdateClinicaDto) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalido';
    }
    const saltOrRounds = 10;
    const password = body.senha;
    const hash = await bcrypt.hash(password, saltOrRounds);

    const sql = `call procUpdateClinica(${id},'${body.cnpj}','${body.razao_social}',
        '${hash}','${body.email}','${body.descricao}',
        '${body.foto}','${body.telefone}',${body.tipo_telefone},
        ${body.id_telefone},${body.id_endereco},
        '${body.numero}','${body.complemento}','${body.cep}');`;

    const result = await this.prisma.$queryRawUnsafe(sql);

    return result;
  }

  async remove(id: number) {
    const valId = await this.validacaoID(id);

    if (valId == false) {
      return 'Id Invalido';
    }
    const query = `call procDeleteClinica(${id})`;

    const result = this.prisma.$queryRawUnsafe(query);
    return result;
  }
}
