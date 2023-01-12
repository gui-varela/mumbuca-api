import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';
import { AssistanceDTO } from './assistance.dto';

@Injectable()
export class AssistanceService {
  constructor(private prisma: PrismaService) {}

  async create(data: AssistanceDTO) {
    const { assistanceReport, ...rest } = data;

    const assistance = await this.prisma.assistance.create({
      data: {
        ...rest,
        assistanceReport: {
          create: {
            report: assistanceReport,
          },
        },
      },
    });

    return assistance;
  }
}
