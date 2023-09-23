import { Module } from '@nestjs/common';
import { MalaMaternidadeService } from './mala-maternidade.service';
import { MalaMaternidadeController } from './mala-maternidade.controller';

@Module({
  controllers: [MalaMaternidadeController],
  providers: [MalaMaternidadeService],
})
export class MalaMaternidadeModule {}
