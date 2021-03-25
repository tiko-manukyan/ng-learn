import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from '../book.model';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  @Input() books: Book[];
  public searchResult: Book[] = [];
  @Output() toMainPage = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSearch(search: any): void {
    const bookName = search.target.value.toLowerCase();
    this.searchResult = this.books.filter((book: Book) => {
      if (book.author.toLowerCase().includes(bookName) || book.title.toLowerCase().includes(bookName)) {
        return true;
      }
      return false;
    });
    console.log(this.searchResult);
  }

  onShowMainPage(): void {
    this.toMainPage.emit();
  }

}
