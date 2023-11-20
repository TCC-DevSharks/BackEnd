import { Mongoose } from 'mongoose';
import { UserSchema } from './schema/user.schema';

export const userProviders = [
  {
    provide: 'FORUM-USER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('FORUM_USER', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];