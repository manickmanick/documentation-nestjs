import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Cat } from './interface/cat.interface';
import { ForbiddenException } from '././../../ownException/forbidden.exception';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  create(cat: Cat) {
    return this.cats.push(cat);
  }

  findAll() {
    throw new ForbiddenException();
    // return this.cats;
    // throw new HttpException(
    //   {
    //     status: HttpStatus.FORBIDDEN,
    //     error: 'This is a custom message',
    //   },
    //   HttpStatus.FORBIDDEN,
    //   {
    //     cause: 'this is sample error msg',
    //   },
    // );
  }

  findOne(id) {
    return id;
  }
}
