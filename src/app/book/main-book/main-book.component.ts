import {Component} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-main-book',
  templateUrl: './main-book.component.html',
  styleUrls: ['./main-book.component.css']
})
export class MainBookComponent {
  books: Book[] = Book.getBooks();

  book: Book = new Book(0, '', '', 0, '');
  private bookId = 6;

  addBook(): void {
    this.book.id = this.bookId;
    this.books[this.bookId - 1] = this.book;
    this.book = new Book(0, '', '', 0, '');
    this.bookId++;
  }
}
