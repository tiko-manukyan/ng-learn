import { Component } from '@angular/core';
import {Book} from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  public books: any = JSON.parse(localStorage.getItem('books')) || [];

  onBookAdded(book: Book): void {
    this.books.push(book);
    localStorage.setItem('books',  JSON.stringify(this.books));
  }

  c(book: Book): void {
    const index = this.books.findIndex((item: Book) => item.title === book.title);
    this.books.splice(index, 1);
    localStorage.setItem('books',  JSON.stringify(this.books));
  }
}
