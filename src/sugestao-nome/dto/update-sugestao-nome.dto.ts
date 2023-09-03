import { PartialType } from '@nestjs/mapped-types';
import { CreateSugestaoNomeDto } from './create-sugestao-nome.dto';

export class UpdateSugestaoNomeDto extends PartialType(CreateSugestaoNomeDto) {}
