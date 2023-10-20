import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = User & Document

@Schema()
export class User {
  
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  active: boolean;
}

export interface User {
  name: string;
  age: number;
  active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);