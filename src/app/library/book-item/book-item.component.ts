import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from '../../book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() bookSelected = new EventEmitter();
  @Output() bookDeleted = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  onSelectBook(): void {
    this.bookSelected.emit(this.book.image);
  }


  onDeleteBook(): void {
    this.bookDeleted.emit(this.book);
  }


}
