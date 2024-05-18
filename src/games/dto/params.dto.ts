import { Field, InputType, Int } from '@nestjs/graphql';

@InputType('Params')
export class Params {
  @Field(() => Int, { nullable: true })
  page?: number = 1;
  @Field(() => Int, { nullable: true })
  perPage?: number = 10;
  @Field(() => String, { nullable: true })
  orderBy?: string = 'id';
  @Field(() => String, { nullable: true })
  order?: string = 'asc';
}
