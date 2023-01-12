import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';
import { AppError } from '../../../errors/AppError';
import { AgencyDTO } from './agency.dto';

@Injectable()
export class AgencyService {
  constructor(private prisma: PrismaService) {}

  async create(data: AgencyDTO) {
    const agencyAlreadyExist = await this.prisma.agency.findUnique({
      where: {
        name: data.name,
      },
    });

    if (agencyAlreadyExist) {
      throw new AppError('Agency already exists', 400);
    }

    const agency = this.prisma.agency.create({
      data,
    });

    return agency;
  }

  async findAll() {
    return this.prisma.agency.findMany();
  }

  async update(id: string, data: AgencyDTO) {
    try {
      await this.prisma.agency.findUniqueOrThrow({
        where: {
          id,
        },
      });
    } catch {
      throw new AppError('Agency does not exist', 404);
    }

    return await this.prisma.agency.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    try {
      await this.prisma.agency.findUniqueOrThrow({
        where: {
          id,
        },
      });
    } catch {
      throw new AppError('Agency does not exist', 404);
    }

    return await this.prisma.agency.delete({
      where: {
        id,
      },
    });
  }
}
