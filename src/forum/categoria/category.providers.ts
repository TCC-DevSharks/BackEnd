import { Mongoose } from 'mongoose';
import { CategorySchema } from './schema/categoria.schema';

export const categoryProviders = [
  {
    provide: 'FORUM-CATEGORY_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('FORUM_CATEGORY', CategorySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];