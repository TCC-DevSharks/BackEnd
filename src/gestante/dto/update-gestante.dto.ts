import { PartialType } from '@nestjs/mapped-types';
import { CreateGestanteDto } from './create-gestante.dto';

export class UpdateGestanteDto extends PartialType(CreateGestanteDto) {}
