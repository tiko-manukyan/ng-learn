import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`.serverCss {
  background-color: aqua;
  color: black;
  font-size: 20px;
}
`],
})
export class ServersComponent {
  public addServer = false;
  public log: number[] = [];
  public textInput = '';



  constructor() {

  }

  onServerCreate(): void {
    this.addServer = !this.addServer;
    this.log.push(this.log.length);
  }

}
