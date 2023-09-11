import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  create(cat: Cat) {
    return this.cats.push(cat);
  }

  findAll() {
    // return this.cats;
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
