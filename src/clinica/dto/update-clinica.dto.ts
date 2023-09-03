import { PartialType } from '@nestjs/mapped-types';
import { CreateResponseClinicaDto } from './create-clinica.dto';

export class UpdateClinicaDto extends PartialType(CreateResponseClinicaDto) {}
