import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Length } from 'class-validator';
@ObjectType({ description: 'game' })
export class Game {
  @Field(() => ID)
  id: number;
  @Field()
  @Length(255)
  name: string;
  @Field()
  slug: string;
  @Field()
  year: number;
  @Field()
  @Length(5000)
  description: string;
}
