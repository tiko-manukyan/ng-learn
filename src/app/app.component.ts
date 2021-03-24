import { Component } from '@angular/core';
import {Book} from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  public books: Book[] = JSON.parse(localStorage.getItem('book')) || [];
  public searchResult: Book[];

  onBookCreated(book: Book): void {
    this.books.push(book);
    localStorage.setItem('book', JSON.stringify(this.books));
  }

  onDeletedBook(index: number): void {
    this.books.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(this.books));

  }

  onSearch(event: any): void {
    const search = event.target.value.toLowerCase();
    this.searchResult = this.books.filter((book: Book) => {
      if (book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search) ) {
        return true;
      }
      return false;
    });
  }

}
