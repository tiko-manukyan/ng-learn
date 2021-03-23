import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from '../book.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  @Input() public books: Book[];
  public showBooks = false;
  public imageUrl: any;
  @Output() onBookDeleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  a(image: string): void {
    this.imageUrl = image;
  }

  b(book: Book): void {
    this.onBookDeleted.emit(book);
  }





}
