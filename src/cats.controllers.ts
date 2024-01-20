import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat-dto';

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
  create(@Body() createCatDto: CreateCatDto): string {
    console.log(createCatDto);
    return 'This action adds a new cat';
  }
}
