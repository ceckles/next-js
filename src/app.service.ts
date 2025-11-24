import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BooksService {
  getHello(): string {
    return 'Hello World!';
  }

  getAllBooks(): Book[] {
    return books;
  }

  getBookById(id: number): Book | undefined {
    return books.find((book) => book.id === id);
  }
}
