import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { TimelineService } from './timeline.service';

describe('TimelineService', () => {
  let service: TimelineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[PrismaModule],
      providers: [TimelineService,PrismaService],
    }).compile();

    service = module.get<TimelineService>(TimelineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
