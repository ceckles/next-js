import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/all')
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get('/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookID = parseInt(id);
    return this.booksService.getBookById(bookID);
  }
}
