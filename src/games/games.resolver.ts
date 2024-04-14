import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class GamesResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
