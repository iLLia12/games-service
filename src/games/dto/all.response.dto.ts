import { Game } from '../game.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'pagination' })
export class Pagination {
  @Field()
  count: number;
  @Field()
  page: number;
  @Field()
  perPage: number;
  @Field()
  countPages: number;
}

@ObjectType({ description: 'index' })
export class AllResponseDto {
  @Field(() => [Game])
  list: Game[];
  @Field(() => Pagination)
  pagination: Pagination;
}
