import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { books } from '../src/FakeDatabase';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/books/all (GET)', () => {
    return request(app.getHttpServer())
      .get('/books/all')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).toHaveLength(books.length);
        res.body.forEach((book: any) => {
          expect(book).toHaveProperty('id');
          expect(book).toHaveProperty('title');
          expect(book).toHaveProperty('author');
          expect(book).toHaveProperty('publicationYear');
          expect(typeof book.id).toBe('number');
          expect(typeof book.title).toBe('string');
          expect(typeof book.author).toBe('string');
          expect(typeof book.publicationYear).toBe('number');
        });
        expect(res.body).toEqual(books);
      });
  });

  it('/books/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/books/1')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('title');
        expect(res.body).toHaveProperty('author');
        expect(res.body).toHaveProperty('publicationYear');
        expect(res.body.id).toBe(1);
        expect(typeof res.body.title).toBe('string');
        expect(typeof res.body.author).toBe('string');
        expect(typeof res.body.publicationYear).toBe('number');
        expect(res.body).toEqual(books[0]);
      });
  });

  it('/books/:id (GET) - Invalid ID', () => {
    return request(app.getHttpServer())
      .get('/books/invalid')
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual({});
        expect(res.body).not.toHaveProperty('id');
        expect(res.body).not.toHaveProperty('title');
        expect(res.body).not.toHaveProperty('author');
        expect(res.body).not.toHaveProperty('publicationYear');
      });
  });

  it('/books/:id (GET) - Book not found', () => {
    return request(app.getHttpServer())
      .get('/books/100')
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual({});
        expect(res.body).not.toHaveProperty('id');
        expect(res.body).not.toHaveProperty('title');
        expect(res.body).not.toHaveProperty('author');
        expect(res.body).not.toHaveProperty('publicationYear');
      });
  });
});
