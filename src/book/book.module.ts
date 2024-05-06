import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [BookService, PrismaClient],
  exports:[BookService]
})
export class BookModule {}
