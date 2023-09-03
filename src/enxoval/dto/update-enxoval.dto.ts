import { PartialType } from '@nestjs/mapped-types';
import { CreateEnxovalDto } from './create-enxoval.dto';

export class UpdateEnxovalDto extends PartialType(CreateEnxovalDto) {}
