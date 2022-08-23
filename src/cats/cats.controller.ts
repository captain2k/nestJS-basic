import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return `Return all cats`;
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This is info of cat number ${id}`;
  }
}
