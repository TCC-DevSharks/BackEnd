import { PartialType } from '@nestjs/mapped-types';
import { CreateComorbidadeDto } from './create-comorbidade.dto';

export class UpdateComorbidadeDto extends PartialType(CreateComorbidadeDto) {}
