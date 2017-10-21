import {Routes} from '@angular/router';
import {MainBookComponent} from './main-book/main-book.component';
import {InfoBookComponent} from './info-book/info-book.component';

export const bookRoutes: Routes = [
  {path: 'books', component: MainBookComponent},
  {path: 'books/:id', component: InfoBookComponent}
];
