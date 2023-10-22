import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = User & Document

@Schema()
export class User {
  
  @Prop({ required: true })
  nome: string;

  @Prop()
  id: number

  @Prop()
  foto: string

  @Prop()
  email: string
}

export interface User {
  nome: string;
  id: number;
  foto:string;
  email:string
}

export const UserSchema = SchemaFactory.createForClass(User);