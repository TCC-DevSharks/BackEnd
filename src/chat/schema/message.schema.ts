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
  message: Text

  @Prop()
  timestamp: true
  };




export const MessagesSchema = SchemaFactory.createForClass(Message);
