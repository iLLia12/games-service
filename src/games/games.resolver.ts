import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Game } from './game.model';
import { GamesService } from './games.service';
import { Prisma } from '@prisma/client';
import { StoreRequest } from './dto/store.dto';
import { UpdateRequest } from './dto/update.dto';
import { Params } from './dto/params.dto';
import { AllResponseDto } from './dto/all.response.dto';

@Resolver(() => Game)
export class GamesResolver {
  constructor(private gamesService: GamesService) {}

  @Query(() => Game)
  async show(@Args({ name: 'id', type: () => Int }) id: number) {
    const item = await this.gamesService.show({ id });
    return item;
  }

  @Query(() => AllResponseDto)
  async all(@Args({ name: 'params', type: () => Params }) params: Params) {
    return this.gamesService.index(params);
  }

  @Mutation(() => Game)
  async store(
    @Args({ name: 'createBody', type: () => StoreRequest })
    data: StoreRequest,
  ) {
    return await this.gamesService.create(data);
  }

  @Mutation(() => Game)
  async update(
    @Args({ name: 'updateBody', type: () => UpdateRequest })
    data: UpdateRequest,
  ) {
    return this.gamesService.update({ where: { id: data.id }, data });
  }

  @Mutation(() => Game)
  async destroy(@Args({ name: 'id', type: () => ID }) id: string) {
    return await this.gamesService.destroy({ id: +id });
  }
}
