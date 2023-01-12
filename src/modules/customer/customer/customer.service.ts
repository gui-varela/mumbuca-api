import { Injectable } from '@nestjs/common';
import { AppError } from 'src/errors/AppError';
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

  async findByCPF(cpf: string) {
    try {
      const customer = await this.prisma.customer.findUniqueOrThrow({
        where: {
          cpf,
        },
      });

      return customer;
    } catch {
      throw new AppError('Customer does not exist', 404);
    }
  }
}
