import { Module } from '@nestjs/common';
import { AssistanceService } from './assistance.service';
import { AssistanceController } from './assistance.controller';
import { PrismaService } from 'src/database/PrismaService';
import { ReportModule } from './report/report.module';
import { AttendanceQueueService } from '../attendance-queue/attendance-queue.service';

@Module({
  controllers: [AssistanceController],
  providers: [AssistanceService, AttendanceQueueService, PrismaService],
  imports: [ReportModule],
})
export class AssistanceModule {}
