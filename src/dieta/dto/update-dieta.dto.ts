import { PartialType } from '@nestjs/mapped-types';
import { CreateDietaDto, CreateMealDto } from './create-dieta.dto';

export class UpdateDietaDto extends PartialType(CreateDietaDto) {}

export class UpdateMealDto extends PartialType(CreateMealDto) {}
