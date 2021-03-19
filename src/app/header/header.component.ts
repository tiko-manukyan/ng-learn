import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() redirect = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onRedirect(path: string): void {
    this.redirect.emit(path);

  }

}
