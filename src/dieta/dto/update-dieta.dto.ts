import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodToMealDto, CreateMealDto } from './create-dieta.dto';

export class UpdateMealDto extends PartialType(CreateMealDto) {}
export class UpdateFoodToMeal extends PartialType(CreateFoodToMealDto) {}
