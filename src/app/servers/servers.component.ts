import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  public title = 'My Card Title';
  public ImgUrl = 'https://cdn.auth0.com/blog/angular/logo3.png';
  public disable = false;
  public isServer = 'Server is not created';
  public mouseOn = '';
  public serverName = 'tikov';




  constructor() {
    setTimeout(() => {
      this.ImgUrl = 'https://www.braveterry.com/wp-content/uploads/2015/12/vue.js.png';
      this.disable = true;
    }, 4000);
  }

  createServer(event: any): void {
    const serverName = prompt('server name');
    this.isServer = `Server ${serverName} Created!`;
  }

  onMousecheck(event:any) {
    this.mouseOn = 'You can type text';

  }

  mouseLeave(event:any) {
    this.mouseOn = '';
  }


}
