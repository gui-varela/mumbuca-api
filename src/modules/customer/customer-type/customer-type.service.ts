import { Injectable } from '@nestjs/common';
import { AppError } from 'src/errors/AppError';
import { PrismaService } from '../../../database/PrismaService';
import { CustomerTypeDTO } from './customer-type.dto';

@Injectable()
export class CustomerTypeService {
  constructor(private prisma: PrismaService) {}

  async create(data: CustomerTypeDTO) {
    const customerTypeAlreadyExists = await this.prisma.customerType.findUnique(
      {
        where: {
          name: data.name,
        },
      },
    );

    if (customerTypeAlreadyExists) {
      throw new AppError('Customer Type already exists');
    }

    const customerType = this.prisma.customerType.create({
      data,
    });

    return customerType;
  }

  async findAll() {
    return this.prisma.customerType.findMany();
  }

  async update(id: string, data: CustomerTypeDTO) {
    try {
      await this.prisma.customerType.findUniqueOrThrow({
        where: {
          id,
        },
      });
    } catch {
      throw new AppError('Attendance Type does not exist', 404);
    }

    return await this.prisma.customerType.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    try {
      await this.prisma.customerType.findUniqueOrThrow({
        where: {
          id,
        },
      });
    } catch {
      throw new AppError('Attendance Type does not exist', 404);
    }

    return await this.prisma.customerType.delete({
      where: {
        id,
      },
    });
  }
}
