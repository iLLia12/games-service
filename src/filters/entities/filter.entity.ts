import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Filter {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
