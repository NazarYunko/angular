import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../book';

@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.css']
})
export class InfoBookComponent {
  book: Book;

  constructor(activatedRoute: ActivatedRoute) {
    this.book = Book.getBooks()[activatedRoute.snapshot.params['id'] - 1];
  }
}

