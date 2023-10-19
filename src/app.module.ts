import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GestanteModule } from './gestante/gestante.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { ClinicaModule } from './clinica/clinica.module';
import { ProfissionalModule } from './profissional/profissional.module';
import { AgendaModule } from './agenda/agenda.module';
import { LoginModule } from './login/login.module';
import { EspecialidadeModule } from './especialidade/especialidade.module';
import { ConsultaModule } from './consulta/consulta.module';
import { ProntuarioModule } from './prontuario/prontuario.module';
import { EnxovalModule } from './enxoval/enxoval.module';
import { SugestaoNomeModule } from './sugestao-nome/sugestao-nome.module';
import { ComorbidadeModule } from './comorbidade/comorbidade.module';
import { AlergiaModule } from './alergia/alergia.module';
import { DeficienciaModule } from './deficiencia/deficiencia.module';
import { MedicacaoModule } from './medicacao/medicacao.module';
import { PagseguroModule } from './pagseguro/pagseguro.module';
import { MalaMaternidadeModule } from './mala-maternidade/mala-maternidade.module';
import { PlanoPartoModule } from './plano-parto/plano-parto.module';
import { DietaModule } from './dieta/dieta.module';
import { RefeicaoModule } from './refeicao/refeicao.module';
import { RedefinirSenhaModule } from './redefinir-senha/redefinir-senha.module';
import { ExerciciosModule } from './exercicios/exercicios.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GestanteModule,
    PrismaModule,
    ClinicaModule,
    ProfissionalModule,
    AgendaModule,
    LoginModule,
    EspecialidadeModule,
    ConsultaModule,
    ProntuarioModule,
    EnxovalModule,
    SugestaoNomeModule,
    ComorbidadeModule,
    AlergiaModule,
    DeficienciaModule,
    MedicacaoModule,
    PagseguroModule,
    MalaMaternidadeModule,
    PlanoPartoModule,
    DietaModule,
    RefeicaoModule,
    RedefinirSenhaModule,
    ExerciciosModule,
    UserModule,
    MongooseModule.forRoot('mongodb+srv://root:<root>@cluster0.bjlbipq.mongodb.net/?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
