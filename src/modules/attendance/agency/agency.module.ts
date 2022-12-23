import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AgencyService } from './agency.service';
import { AgencyController } from './agency.controller';
import { PrismaService } from '../../../database/PrismaService';
import { EnsureAuthenticated } from '../../../middlewares/ensureAuthenticated.middleware';

@Module({
  controllers: [AgencyController],
  providers: [AgencyService, PrismaService],
})
export class AgencyModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EnsureAuthenticated)
      .forRoutes({ path: 'agency', method: RequestMethod.ALL });
  }
}
