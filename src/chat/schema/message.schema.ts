import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "./user.schema";

export type MessageDocument = Message & Document;
export class Text{
   
  text: string;

  users: Array<User>;

  sender: mongoose.Schema.Types.ObjectId;

}
@Schema()
export class Message {
  @Prop({ required: true })
  message: Text

  @Prop()
  timestamp: true
  };




export const MessagesSchema = SchemaFactory.createForClass(Message);
