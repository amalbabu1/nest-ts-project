import { Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Request, query } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('breeds')
  findAllBreads(@Req() request: Request): string {
    console.log(request.query);
    return 'This action returns all Cat Breeds';
  }

  // @Get(':id')
  // getBreedsById(@Param() params: any): string {
  //   console.log(params);
  //   return 'This action returns all Cat Breeds';
  // }
  @Get(':id')
  getBreedsById(@Param('id') id: string): string {
    console.log(id);
    return 'This action returns all Cat Breeds';
  }
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
