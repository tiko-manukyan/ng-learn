import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from '../book.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  @Input() books: Book[];
  @Output() deletedBook = new EventEmitter<number>();
  public showContent = false;
  public imageURL: string;
  @Output() sortByTitle = new EventEmitter();


  constructor() { }

  ngOnInit(): void {


  }

  onBookDeleted(i: number): void {
    this.deletedBook.emit(i);
  }

  onToggleContent(): void {
    this.showContent = !this.showContent;
    if (!this.showContent) {
      this.imageURL = '';
    }

  }

  a(bookImage: string): void {
    this.imageURL = bookImage;
  }

  onSortedByTitle(): void {
  this.sortByTitle.emit();
  }









}
