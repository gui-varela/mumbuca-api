import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';
import { AppError } from 'src/errors/AppError';
import { AttendanceQueueDTO } from './attendance-queue.dto';

@Injectable()
export class AttendanceQueueService {
  constructor(private prisma: PrismaService) {}

  async addToQueue({ agencyId, forwardingId, customerId }: AttendanceQueueDTO) {
    const userAlreadyInQueue = await this.prisma.attendanceQueue.findUnique({
      where: {
        customerId,
      },
    });

    if (userAlreadyInQueue) {
      throw new AppError('User already in queue!');
    }

    await this.prisma.attendanceQueue.create({
      data: {
        agencyId,
        forwardingId,
        customerId,
      },
    });

    const newQueue = await this.prisma.attendanceQueue.findMany();

    return newQueue;
  }

  async removeFromQueue(customerId: string) {
    try {
      await this.prisma.attendanceQueue.delete({
        where: {
          customerId,
        },
      });
    } catch {
      throw new AppError('Customer not found in queue', 404);
    }

    const newQueue = await this.prisma.attendanceQueue.findMany();

    return newQueue;
  }

  async listCurrentQueueByAgencyAndForwarding(
    agencyId: string,
    forwardingId: string,
  ) {
    const currentQueue = await this.prisma.attendanceQueue.findMany({
      where: {
        AND: [
          {
            agencyId: {
              equals: agencyId,
            },
            forwardingId: {
              equals: forwardingId,
            },
          },
        ],
      },
    });

    return currentQueue;
  }
}
