import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from '../../book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() bookDeleted = new EventEmitter<void>();
  @Output() selectedBook = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

  }

  onBookDelete(): void {
    this.bookDeleted.emit();

  }

  onSelectBook(): void {
    this.selectedBook.emit();
  }

}
