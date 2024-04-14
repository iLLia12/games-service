import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Game } from './game.model';
import { GamesService } from './games.service';
import { Prisma } from '@prisma/client';

@Resolver((of) => Game)
export class GamesResolver {
  constructor(private gamesService: GamesService) {}

  @Query((returns) => Game)
  async game(
    @Args('id', { type: () => Int }) id: Prisma.gamesWhereUniqueInput,
  ) {
    return this.gamesService.game(id);
  }
  @Query((returns) => [Game])
  async games() {
    return this.gamesService.games({});
  }
}
