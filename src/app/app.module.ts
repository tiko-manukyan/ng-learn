import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import {FormsModule} from '@angular/forms';
import { LibraryComponent } from './library/library.component';
import { BookItemComponent } from './shared/book-item/book-item.component';
import { SelectedBookComponent } from './library/selected-book/selected-book.component';
import {SearchBookComponent} from './search-book/search-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageBookComponent,
    LibraryComponent,
    BookItemComponent,
    SelectedBookComponent,
    SearchBookComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
