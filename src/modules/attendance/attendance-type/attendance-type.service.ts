import { Injectable } from '@nestjs/common';
import { AppError } from 'src/errors/AppError';
import { PrismaService } from '../../../database/PrismaService';

import { AttendanceTypeDTO } from './attendance-type.dto';

@Injectable()
export class AttendanceTypeService {
  constructor(private prisma: PrismaService) {}

  async create(data: AttendanceTypeDTO) {
    const attendanceTypeAlreadyExists =
      await this.prisma.attendanceType.findUnique({
        where: {
          name: data.name,
        },
      });

    if (attendanceTypeAlreadyExists) {
      throw new AppError('Attendance Type already exists');
    }

    const attendanceType = this.prisma.attendanceType.create({
      data,
    });

    return attendanceType;
  }

  async findAll() {
    return this.prisma.attendanceType.findMany();
  }

  async update(id: string, data: AttendanceTypeDTO) {
    try {
      await this.prisma.attendanceType.findUniqueOrThrow({
        where: {
          id,
        },
      });
    } catch {
      throw new AppError('Attendance Type does not exist', 404);
    }

    return await this.prisma.attendanceType.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    try {
      await this.prisma.attendanceType.findUniqueOrThrow({
        where: {
          id,
        },
      });
    } catch {
      throw new AppError('Attendance Type does not exist', 404);
    }

    return await this.prisma.attendanceType.delete({
      where: {
        id,
      },
    });
  }
}
