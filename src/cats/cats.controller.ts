import {
  Controller,
  Get,
  Req,
  Session,
  Body,
  Query,
  Param,
  Headers,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  // @Get()
  // findAll(): string {
  //   return '<h1>This action returns all cats</h1>';
  // }

  @Get('expressGet/:id')
  findAllByExpress(@Req() request: Request): string {
    const queryParams = request.query; // Access query parameters
    const headers = request.headers; // Access HTTP headers
    const params = request.params; // Access route parameters
    console.log(queryParams, headers, params);

    return 'this is returned using express package';
  }

  @Get('/findAllByNest/:id')
  findAllByNest(
    @Session() session: string,
    @Body() body: any,
    @Query() query,
    @Param() param,
    @Headers() header,
  ) {
    console.log(body, query, param, header);
    return 'success';
  }

  @Post()
  async create(@Body() body) {
    return this.catsService.create(body);
  }

  @Get('findAllCats')
  async findAllCats() {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }
}
