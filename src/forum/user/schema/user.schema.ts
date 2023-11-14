import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UseDocument = Use & Document

@Schema()
export class Use {
  
  @Prop({ required: true })
  username: string;

  @Prop()
  foto: string;

  @Prop({ required: true })
  mysql: number

  @Prop()
  age: number;

}

export interface Use {
  username: string;
  foto: string;
  mysql: number;
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(Use);
