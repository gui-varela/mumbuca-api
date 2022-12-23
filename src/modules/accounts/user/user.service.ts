import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { AppError } from 'src/errors/AppError';
import { PrismaService } from '../../../database/PrismaService';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create({ name, username, password, isAdmin = false }: UserDTO) {
    const userAlreadyExists = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (userAlreadyExists) {
      throw new AppError('Username already used');
    }

    const passwordHash = await hash(password, 8);

    const user = await this.prisma.user.create({
      data: {
        name,
        username,
        password: passwordHash,
        isAdmin,
      },
    });

    return {
      id: user.id,
      name: user.name,
      username: user.username,
      isAdmin: user.isAdmin,
      created_at: user.created_at,
    };
  }
}
