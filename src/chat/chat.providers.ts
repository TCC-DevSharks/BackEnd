import { Mongoose } from 'mongoose';
import { MessagesSchema } from './schema/message.schema';
import { UserSchema } from './schema/user.schema';

export const messageProviders = [
  {
    provide: 'MESSAGE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Message', MessagesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const userProviders = [
    {
      provide: 'USER_MODEL',
      useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];