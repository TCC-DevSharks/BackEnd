import { Mongoose } from 'mongoose';
import { TopicSchema } from './schema/topic.schema';

export const topicProviders = [
  {
    provide: 'FORUM-TOPIC_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('FORUM_TOPIC', TopicSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];