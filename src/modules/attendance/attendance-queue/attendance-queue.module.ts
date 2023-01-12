import { Module } from '@nestjs/common';
import { AttendanceQueueService } from './attendance-queue.service';
import { AttendanceQueueController } from './attendance-queue.controller';
import { PrismaService } from '../../../database/PrismaService';

@Module({
  controllers: [AttendanceQueueController],
  providers: [AttendanceQueueService, PrismaService],
})
export class AttendanceQueueModule {}
