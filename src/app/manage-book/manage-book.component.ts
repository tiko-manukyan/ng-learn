import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Book} from '../book.model';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent implements OnInit {

  public author: string;
  public title: string;
  public imagePath: string;
  @Output() bookSaved = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  onSaveBook(): void {
    const bookItem = new Book(this.title, this.author, this.imagePath);
    this.bookSaved.emit(bookItem);
    this.author = '';
    this.title = '';
    this.imagePath = '';
  }




}
