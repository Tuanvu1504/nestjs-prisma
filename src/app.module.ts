import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [BookModule,
    MongooseModule.forRoot(
      'mongodb+srv://vutuan15044:vutuan123@book.zt3zago.mongodb.net/?retryWrites=true&w=majority&appName=Book',
    ),
  ],
  controllers: [BookController],
  providers: [],
})
export class AppModule {}
