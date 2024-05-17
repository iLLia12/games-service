import { InputType, Field, ObjectType } from '@nestjs/graphql';

@InputType('StoreRequest')
@ObjectType({ description: 'StoreRequest' })
export class StoreRequest {
  @Field()
  name: string;
  @Field()
  slug: string;
  @Field()
  year: number;
  @Field()
  description: string;
}
