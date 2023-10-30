import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "./user.schema";

export type MessageDocument = Message & Document;
export class Text{
   
  text: string;

  from: User

  to: User

  sender: User

}
@Schema()
export class Message {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  users: Array<string>

  @Prop({ required: true })
  sender: string

  @Prop()
  timestamp: true
  };


  class arrayUser{

  @Prop({ required: true })
    from: string

  @Prop({ required: true })
    to: string

  }


export const MessagesSchema = SchemaFactory.createForClass(Message);
