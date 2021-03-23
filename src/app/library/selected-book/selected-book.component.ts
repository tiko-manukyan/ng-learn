import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-selected-book',
  templateUrl: './selected-book.component.html',
  styleUrls: ['./selected-book.component.css']
})
export class SelectedBookComponent implements OnInit {
  @Input() image: any;


  constructor() { }

  ngOnInit(): void {
  }

}
