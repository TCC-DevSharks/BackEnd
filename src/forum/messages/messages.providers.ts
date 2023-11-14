import { Mongoose } from 'mongoose';
import { MessageSchema } from './schema/messages.schema';

export const messageProviders = [
  {
    provide: 'FORUM-MESSAGE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('FORUM_MESSAGE', MessageSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];