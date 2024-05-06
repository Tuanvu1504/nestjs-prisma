import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BookService {
  private readonly logger = new Logger(BookService.name);

  constructor(private prisma: PrismaClient) {}

  async createBook(title: string, home: string) {
    try {
      const newBook = await this.prisma.book.create({
        data: {
          title,
          home,
        },
      });
      return newBook;
    } catch (error) {
      this.logger.error(`Error creating book: ${error.message}`);
      throw error;
    }
  }
}
