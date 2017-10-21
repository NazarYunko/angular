import {NgModule} from '@angular/core';
import {MainBookComponent} from './main-book/main-book.component';
import {RouterModule} from '@angular/router';
import {bookRoutes} from './book.route';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InfoBookComponent} from './info-book/info-book.component';

@NgModule({
  declarations: [
    MainBookComponent,
    InfoBookComponent
  ],
  imports: [
    RouterModule.forChild(bookRoutes),
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [],
})
export class BookModule {
}
