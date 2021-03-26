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
  public showSearchContent = false;


  onBookCreated(book: Book): void {
    this.books.push(book);
    localStorage.setItem('book', JSON.stringify(this.books));
  }

  onDeletedBook(index: number): void {
    this.books.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(this.books));

  }

  onGoToSearch(): void {
    this.showSearchContent = !this.showSearchContent;
  }

  onSortButton(): void {
    console.log(this.books.sort((a: Book, b: Book) => {
      if ( a.title < b.title ) {
        return -1;
      }
      if ( a.title > b.title ) {
        return 1;
      }
      return 0;
    }));
  }
}
