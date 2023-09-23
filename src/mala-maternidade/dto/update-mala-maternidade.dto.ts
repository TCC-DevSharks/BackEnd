import { PartialType } from '@nestjs/mapped-types';
import { CreateMalaMaternidadeDto } from './create-mala-maternidade.dto';

export class UpdateMalaMaternidadeDto extends PartialType(CreateMalaMaternidadeDto) {}
