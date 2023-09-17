import { Module } from '@nestjs/common';
import { PagseguroService } from './pagseguro.service';
import { PagseguroController } from './pagseguro.controller';

@Module({
  controllers: [PagseguroController],
  providers: [PagseguroService],
})
export class PagseguroModule {}
