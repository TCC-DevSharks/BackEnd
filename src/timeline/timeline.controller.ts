import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimelineService } from './timeline.service';
import { CreateTimelineDto } from './dto/create-timeline.dto';
import { UpdateTimelineDto } from './dto/update-timeline.dto';

@Controller('timeline')
export class TimelineController {
  constructor(private readonly timelineService: TimelineService) {}

  @Post()
  create(@Body() createTimelineDto: CreateTimelineDto) {
    return this.timelineService.create(createTimelineDto);
  }

  @Get()
  async findAll() {
    return {semanas:await this.timelineService.findAll() } 
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return {semana: await this.timelineService.findOne(+id)}
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimelineDto: UpdateTimelineDto) {
    return this.timelineService.update(+id, updateTimelineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timelineService.remove(+id);
  }
}
