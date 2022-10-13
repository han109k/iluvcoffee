import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  // @Get()
  // findAll(@Res() response) {
  //   // Express response object
  //   response.status(200).send('This aciton returns all coffees');
  // }

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param() params) {
    // Param() lets us use HTTP parameters in nestJS app
    console.log(params);
    return `This action returns #${params.id} coffee`;
  }

  @Get('/another/:id')
  findAnotherOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE) // customizing HTTP response code
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}
