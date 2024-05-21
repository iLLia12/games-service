import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('UpdateRequest')
@ObjectType({ description: 'UpdateRequest' })
export class UpdateRequest {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  slug: string;
  @Field()
  year: number;
  @Field()
  description: string;
}
