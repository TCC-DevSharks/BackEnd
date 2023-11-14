import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = Message & Document

@Schema()
export class Message {
  
  @Prop({ required: true })
  topic: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  date: string;

}

export interface Message {
  topic: string;
  user: string;
  text: string;
  date: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
