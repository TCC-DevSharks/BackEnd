import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UseDocument = Use & Document

@Schema()
export class Use {
  
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  active: boolean;
}

export interface Use {
  name: string;
  age: number;
  active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(Use);
