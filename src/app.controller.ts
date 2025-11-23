import { Controller, Get } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/all')
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }
  
}
