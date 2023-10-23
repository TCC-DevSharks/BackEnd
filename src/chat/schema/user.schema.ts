import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = User & Document

@Schema()
export class User {
  
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  usuario: string;

  @Prop()
  foto: string

  @Prop()
  email: string
}

export interface User {
  name: string;
 usuario: string;
  foto:string;
  email:string
}

export const UserSchema = SchemaFactory.createForClass(User);