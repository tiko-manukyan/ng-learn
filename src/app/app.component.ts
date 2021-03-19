import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public route = 'recipe';

  handleRedirect(path: string): void {
    this.route = path;
  }
}
