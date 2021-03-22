import { Component } from '@angular/core';
import {Book} from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public books: Book[] = [];

  onBookAdded(book: Book): void {
    this.books.push(book);
  }
}
