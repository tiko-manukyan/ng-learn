import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  @Input() public books: Book[];
  public showBooks = false;

  constructor() { }

  ngOnInit(): void {

  }

}
