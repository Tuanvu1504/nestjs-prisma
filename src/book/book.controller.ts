import { Body, Controller, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { title } from 'process';

@Controller('book')
export class BookController {
  constructor (private  bookService: BookService){}

  @Post('/api')
  async CreateBook(@Body('title') title: string, @Body('home') home: string) {
    return this.bookService.createBook(title, home)
  }
}
