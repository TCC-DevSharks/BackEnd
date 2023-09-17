import { PartialType } from '@nestjs/mapped-types';
import { CreatePagseguroDto } from './create-pagseguro.dto';

export class UpdatePagseguroDto extends PartialType(CreatePagseguroDto) {}
