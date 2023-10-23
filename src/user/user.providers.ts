import { Mongoose } from 'mongoose';
import { UserSchema } from './schema/user.schema';

export const useProviders = [
  {
    provide: 'USE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Use', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];