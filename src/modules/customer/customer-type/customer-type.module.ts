import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomerTypeService } from './customer-type.service';
import { CustomerTypeController } from './customer-type.controller';
import { PrismaService } from '../../../database/PrismaService';
import { EnsureAuthenticated } from 'src/middlewares/ensureAuthenticated.middleware';

@Module({
  controllers: [CustomerTypeController],
  providers: [CustomerTypeService, PrismaService],
})
export class CustomerTypeModule {}
