import { Module } from '@nestjs/common';
import { TriageService } from './triage.service';
import { TriageController } from './triage.controller';
import { PrismaService } from '../../../database/PrismaService';
import { AttendanceQueueService } from '../attendance-queue/attendance-queue.service';

@Module({
  controllers: [TriageController],
  providers: [TriageService, PrismaService, AttendanceQueueService],
})
export class TriageModule {}
