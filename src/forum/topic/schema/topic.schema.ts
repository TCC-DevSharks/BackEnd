import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TopicDocument = Topic & Document

@Schema()
export class Topic {

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  user: string;
  
  @Prop({ required: true })
  date: string;

}

export interface Topic {
  category: string;
  title: string;
  user: string;
  date: string;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
