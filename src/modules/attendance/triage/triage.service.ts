import { Injectable } from '@nestjs/common';
import { AppError } from 'src/errors/AppError';
import { PrismaService } from '../../../database/PrismaService';
import { TriageDTO } from './triage.dto';

@Injectable()
export class TriageService {
  constructor(private prisma: PrismaService) {}

  async create(data: TriageDTO) {
    const prismaAttendanceTypeObjects = [];
    const { attendanceTypeIds, ...rest } = data;

    attendanceTypeIds.forEach((id) => {
      try {
        this.prisma.attendanceType.findUniqueOrThrow({
          where: {
            id,
          },
        });
      } catch {
        throw new AppError(
          `Attendance Type refereed to ${id} does not exist`,
          404,
        );
      }

      const prismaAttendanceTypeObject = {
        attendanceType: {
          connect: {
            id,
          },
        },
      };

      prismaAttendanceTypeObjects.push(prismaAttendanceTypeObject);
    });

    const triage = await this.prisma.triage.create({
      data: {
        ...rest,
        created_at: new Date(),
        AttendanceTypesOnTriages: {
          create: prismaAttendanceTypeObjects,
        },
      },
    });

    return { ...triage, attendanceTypeIds };
  }

  async listByForwarding(forwardingId: string) {
    const triages = await this.prisma.triage.findMany({
      where: {
        forwardingId,
      },
    });

    return triages;
  }

  async listByAgency(agencyId: string) {
    const triages = await this.prisma.triage.findMany({
      where: {
        agencyId,
      },
    });

    return triages;
  }

  async listByAgencyAndForwarding(agencyId: string, forwardingId: string) {
    const triages = await this.prisma.triage.findMany({
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
      orderBy: {
        finished_at: 'asc',
      },
    });

    return triages;
  }
}
