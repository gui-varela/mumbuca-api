import { Injectable } from '@nestjs/common';
import { AppError } from 'src/errors/AppError';
import { PrismaService } from '../../../database/PrismaService';
import { ForwardingDTO } from './forwarding.dto';

@Injectable()
export class ForwardingService {
  constructor(private prisma: PrismaService) {}

  async create(data: ForwardingDTO) {
    const forwardingAlreadyExists = await this.prisma.forwarding.findUnique({
      where: {
        name: data.name,
      },
    });

    if (forwardingAlreadyExists) {
      throw new AppError('Forwarding already exists');
    }

    const forwarding = this.prisma.forwarding.create({
      data,
    });

    return forwarding;
  }

  async findAll() {
    return this.prisma.forwarding.findMany();
  }

  async update(id: string, data: ForwardingDTO) {
    try {
      await this.prisma.forwarding.findUniqueOrThrow({
        where: {
          id,
        },
      });
    } catch {
      throw new AppError('Attendance Type does not exist', 404);
    }

    return await this.prisma.forwarding.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    try {
      await this.prisma.forwarding.findUniqueOrThrow({
        where: {
          id,
        },
      });
    } catch {
      throw new AppError('Attendance Type does not exist', 404);
    }

    return await this.prisma.forwarding.delete({
      where: {
        id,
      },
    });
  }
}
