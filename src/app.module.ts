import { Module } from '@nestjs/common';
import { AgencyModule } from './modules/attendance/agency/agency.module';
import { AttendanceTypeModule } from './modules/attendance/attendance-type/attendance-type.module';
import { ForwardingModule } from './modules/attendance/forwarding/forwarding.module';
import { CustomerTypeModule } from './modules/customer/customer-type/customer-type.module';
import { UserModule } from './modules/accounts/user/user.module';
import { SessionsModule } from './modules/accounts/sessions/sessions.module';
import { CustomerModule } from './modules/customer/customer/customer.module';
import { TriageModule } from './modules/attendance/triage/triage.module';
import { AttendanceQueueModule } from './modules/attendance/attendance-queue/attendance-queue.module';
import { AssistanceModule } from './modules/attendance/assistance/assistance.module';

@Module({
  imports: [
    AgencyModule,
    AttendanceTypeModule,
    ForwardingModule,
    CustomerTypeModule,
    UserModule,
    SessionsModule,
    CustomerModule,
    TriageModule,
    AttendanceQueueModule,
    AssistanceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
