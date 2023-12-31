import {
  Controller,
  Get,
  Req,
  Session,
  Body,
  Query,
  Param,
  Headers,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return '<h1>This action returns all cats</h1>';
  }

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
}
