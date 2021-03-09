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
  public log = [];



  constructor() {

  }

  // tslint:disable-next-line:typedef
  onServerCreate() {
    this.addServer = !this.addServer;
    // @ts-ignore
    this.log.push(this.log.length + 1);
  }




}
