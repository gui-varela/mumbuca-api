import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AttendanceQueueService } from '../attendance-queue/attendance-queue.service';
import { TriageDTO } from './triage.dto';
import { TriageService } from './triage.service';

@Controller('triage')
export class TriageController {
  constructor(
    private triageService: TriageService,
    private attendanceQueueService: AttendanceQueueService,
  ) {}

  @Post()
  async create(@Body() data: TriageDTO) {
    const newQueue = await this.attendanceQueueService.addToQueue({
      agencyId: data.agencyId,
      customerId: data.customerId,
      forwardingId: data.forwardingId,
    });

    const triage = await this.triageService.create(data);

    return { triage, newQueue };
  }

  @Get('forwarding/:id')
  async listByForwarding(@Param('id') forwardingId: string) {
    return await this.triageService.listByForwarding(forwardingId);
  }

  @Get('agency/:id')
  async listByAgency(@Param('id') agencyId: string) {
    return await this.triageService.listByAgency(agencyId);
  }

  @Get()
  async listByAgencyAndForwarding(
    @Query('agencyId') agencyId: string,
    @Query('forwardingId') forwardingId: string,
  ) {
    return await this.triageService.listByAgencyAndForwarding(
      agencyId,
      forwardingId,
    );
  }
}
