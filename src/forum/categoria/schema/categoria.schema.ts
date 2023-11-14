import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = Category & Document

@Schema()
export class Category {
  
  @Prop({ required: true })
  category: string;

}

export interface Use {
  category: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
