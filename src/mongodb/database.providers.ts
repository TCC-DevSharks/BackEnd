import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb+srv://root:root@cluster0.bjlbipq.mongodb.net/?retryWrites=true&w=majority'),
  },
];