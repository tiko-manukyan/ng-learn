import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Book} from '../book.model';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent implements OnInit {
  public authorName: string;
  @ViewChild('bookTittle') bookTittle: ElementRef;
  @Output() bookAdded = new EventEmitter<Book>();


  constructor() { }

  ngOnInit(): void {
  }


  public onSaveBook(imagePath: HTMLInputElement): void {
    const imageSrc = imagePath.value;
    const tittleBook = this.bookTittle.nativeElement.value;
    const book = new Book(tittleBook, this.authorName, imageSrc);
    this.bookAdded.emit(book);
    this.clearForm(imagePath);
  }

  private clearForm(imagePath: HTMLInputElement): void {
    this.authorName = '';
    imagePath.value = '';
    this.bookTittle.nativeElement.value = '';
  }
}
