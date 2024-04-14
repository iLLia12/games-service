import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Length } from 'class-validator';
@ObjectType({ description: 'games' })
export class Game {
  @Field(() => ID)
  id: number;
  @Field()
  @Length(255)
  name: string;
  @Field()
  slug: string;
  @Field()
  @Length(5000)
  description: string;
  @Field()
  createdAt: Date;
  @Field({ nullable: true })
  updatedAt: Date;
}
