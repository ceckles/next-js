import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { books } from 'src/FakeDatabase';

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
      .expect(books);
  });

  it('/books/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/books/1')
      .expect(200)
      .expect(books[0]);
  });

  it('/books/:id (GET) - Invalid ID', () => {
    return request(app.getHttpServer())
      .get('/books/invalid')
      .expect(400)
      .expect({ error: 'Invalid book ID' });
  });

  it('/books/:id (GET) - Book not found', () => {
    return request(app.getHttpServer())
      .get('/books/100')
      .expect(404)
      .expect({ error: 'Book not found' });
  });
});
