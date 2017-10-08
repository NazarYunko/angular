import {NgModule} from '@angular/core';
import {MainBookComponent} from './main-book/main-book.component';
import {RouterModule} from '@angular/router';
import {routes} from './book.route';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MainBookComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    BrowserModule
  ],
  providers: [],
})
export class BookModule {
}
