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
