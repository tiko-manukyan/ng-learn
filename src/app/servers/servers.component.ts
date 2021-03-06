import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  public serverCreationStatus = 'No Servers Created';
  public allowNewServer = false;
  public serverName = 'test';
  public serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  public onCreateServer(): void {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }


}
