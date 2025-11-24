import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './app.controller';
import { BooksService } from './app.service';
import { books } from './FakeDatabase';

describe('BooksController', () => {
  let booksController: BooksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    booksController = app.get<BooksController>(BooksController);
  });

  describe('getAllBooks', () => {
    it('should return all books', () => {
      expect(booksController.getAllBooks()).toEqual(books);
    });
  });

  describe('getBookById', () => {
    it('should return a book by id', () => {
      expect(booksController.getBookById('1')).toEqual(books[0]);
    });

    it('should return undefined for non-existent id', () => {
      expect(booksController.getBookById('999')).toBeUndefined();
    });
  });
});
