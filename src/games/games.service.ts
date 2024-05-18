import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { StoreRequest } from './dto/store.dto';
import { Game } from './game.model';
import { Params } from './dto/params.dto';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}

  async show(userWhereUniqueInput: Prisma.gamesWhereUniqueInput) {
    return this.prisma.games.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async index(params: Params) {
    const { page, perPage: take, orderBy, order } = params;
    const count = await this.prisma.games.count();
    const countPages = Math.ceil(count / take);
    const skip = (page - 1) * take;
    return {
      list: this.prisma.games.findMany({
        skip,
        take,
        //cursor,
        // where,
        orderBy: {
          [orderBy]: order,
        },
      }),
      pagination: {
        count,
        page,
        perPage: take,
        countPages,
      },
    };
  }

  async create(data: StoreRequest): Promise<Game | string> {
    return this.prisma.games.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.gamesWhereUniqueInput;
    data: Prisma.gamesUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.games.update({
      data,
      where,
    });
  }

  async destroy(where: Prisma.gamesWhereUniqueInput) {
    return this.prisma.games.delete({
      where,
    });
  }
}
