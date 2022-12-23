import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ForwardingService } from './forwarding.service';
import { ForwardingController } from './forwarding.controller';
import { PrismaService } from '../../../database/PrismaService';
import { EnsureAuthenticated } from 'src/middlewares/ensureAuthenticated.middleware';

@Module({
  controllers: [ForwardingController],
  providers: [ForwardingService, PrismaService],
})
export class ForwardingModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EnsureAuthenticated)
      .forRoutes({ path: 'forwarding', method: RequestMethod.ALL });
  }
}
