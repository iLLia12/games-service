import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FiltersService } from './filters.service';
import { Filter } from './entities/filter.entity';
import { CreateFilterInput } from './dto/create-filter.input';
import { UpdateFilterInput } from './dto/update-filter.input';

@Resolver(() => Filter)
export class FiltersResolver {
  constructor(private readonly filtersService: FiltersService) {}

  @Mutation(() => Filter)
  createFilter(
    @Args('createFilterInput') createFilterInput: CreateFilterInput,
  ) {
    return this.filtersService.create(createFilterInput);
  }

  @Query(() => [Filter], { name: 'filters' })
  findAll() {
    return this.filtersService.findAll();
  }

  @Query(() => Filter, { name: 'filter' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.filtersService.findOne(id);
  }

  @Mutation(() => Filter)
  updateFilter(
    @Args('updateFilterInput') updateFilterInput: UpdateFilterInput,
  ) {
    return this.filtersService.update(updateFilterInput.id, updateFilterInput);
  }

  @Mutation(() => Filter)
  removeFilter(@Args('id', { type: () => Int }) id: number) {
    return this.filtersService.remove(id);
  }
}
