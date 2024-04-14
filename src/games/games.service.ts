import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Game } from './game.model';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}

  async game(
    userWhereUniqueInput: Prisma.gamesWhereUniqueInput,
  ): Promise<Game | null> {
    return this.prisma.games.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async games(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.gamesWhereUniqueInput;
    where?: Prisma.gamesWhereInput;
    orderBy?: Prisma.gamesOrderByWithRelationInput;
  }): Promise<Game[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.games.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.gamesCreateInput): Promise<Game> {
    return this.prisma.games.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.gamesWhereUniqueInput;
    data: Prisma.gamesUpdateInput;
  }): Promise<Game> {
    const { where, data } = params;
    return this.prisma.games.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.gamesWhereUniqueInput): Promise<Game> {
    return this.prisma.games.delete({
      where,
    });
  }
}
