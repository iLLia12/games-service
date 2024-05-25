import { Injectable } from '@nestjs/common';
import { CreateFilterInput } from './dto/create-filter.input';
import { UpdateFilterInput } from './dto/update-filter.input';

@Injectable()
export class FiltersService {
  create(createFilterInput: CreateFilterInput) {
    return 'This action adds a new filter';
  }

  findAll() {
    return `This action returns all filters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filter`;
  }

  update(id: number, updateFilterInput: UpdateFilterInput) {
    return `This action updates a #${id} filter`;
  }

  remove(id: number) {
    return `This action removes a #${id} filter`;
  }
}
