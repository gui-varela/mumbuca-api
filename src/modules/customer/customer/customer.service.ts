import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';
import { CustomerDTO } from './customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async create(data: CustomerDTO) {
    const user = await this.prisma.customer.create({
      data,
    });

    return user;
  }
}
