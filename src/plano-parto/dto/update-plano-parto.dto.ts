import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanoPartoDto } from './create-plano-parto.dto';

export class UpdatePlanoPartoDto extends PartialType(CreatePlanoPartoDto) {}
