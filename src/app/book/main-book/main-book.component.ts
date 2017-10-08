import {Component} from '@angular/core';
import {Book} from './book';

@Component({
  selector: 'app-main-book',
  templateUrl: './main-book.component.html',
  styleUrls: ['./main-book.component.css']
})
export class MainBookComponent {
  books: Book[] = [
    new Book('Angels and Demons', 'Den Brown', '85',
      'https://images-na.ssl-images-amazon.com/images/I/81-%2BZ-hkITL.jpg'),
    new Book('IT', 'Stephen King', '215',
      'https://images-na.ssl-images-amazon.com/images/I/51xPIEYPWWL._SX326_BO1,204,203,200_.jpg'),
    new Book('The road', 'Cormac McCarthy', '66',
      'https://images.gr-assets.com/books/1428351742l/6746212.jpg'),
    new Book('1984', 'George Orwell', '110',
      'http://wwwcdn.printmag.com/wp-content/uploads/1984-book-covers-5.jpg'),
    new Book('Code da Vinci', 'Den Brown', '78',
      'https://images-na.ssl-images-amazon.com/images/I/51W%2B5lYSiOL._SX319_BO1,204,203,200_.jpg')
  ];
}
