import { Controller, Get, Query } from '@nestjs/common';
import { AttendanceQueueService } from './attendance-queue.service';

@Controller('attendance-queue')
export class AttendanceQueueController {
  constructor(
    private readonly attendanceQueueService: AttendanceQueueService,
  ) {}

  @Get()
  async listCurrentQueueByAgencyAndForwarding(
    @Query('agencyId') agencyId: string,
    @Query('forwardingId') forwardingId: string,
  ) {
    return await this.attendanceQueueService.listCurrentQueueByAgencyAndForwarding(
      agencyId,
      forwardingId,
    );
  }

  @Get()
  async listCurrentQueueByAgency(@Query('agencyId') agencyId: string) {
    return await this.attendanceQueueService.listCurrentQueueByAgency(agencyId);
  }
}
