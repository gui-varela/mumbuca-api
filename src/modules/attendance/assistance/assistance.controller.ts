import { Body, Controller, Post } from '@nestjs/common';
import { AttendanceQueueService } from '../attendance-queue/attendance-queue.service';
import { AssistanceDTO } from './assistance.dto';
import { AssistanceService } from './assistance.service';

@Controller('assistance')
export class AssistanceController {
  constructor(
    private assistanceService: AssistanceService,
    private attendanceQueueService: AttendanceQueueService,
  ) {}

  @Post()
  async create(@Body() data: AssistanceDTO) {
    const newQueue = await this.attendanceQueueService.removeFromQueue(
      data.customerId,
    );

    const assistance = await this.assistanceService.create(data);

    return { newQueue, assistance };
  }
}
