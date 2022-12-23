import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AttendanceTypeService } from './attendance-type.service';
import { AttendanceTypeController } from './attendance-type.controller';
import { PrismaService } from '../../../database/PrismaService';
import { EnsureAuthenticated } from 'src/middlewares/ensureAuthenticated.middleware';

@Module({
  controllers: [AttendanceTypeController],
  providers: [AttendanceTypeService, PrismaService],
})
export class AttendanceTypeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EnsureAuthenticated)
      .forRoutes({ path: 'attendance-type', method: RequestMethod.ALL });
  }
}
