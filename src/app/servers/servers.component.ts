import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  title = 'My Card Title'
  ImgUrl = 'https://cdn.auth0.com/blog/angular/logo3.png'

  ngOnInit() {
    setTimeout(() => {
      this.ImgUrl = 'https://www.braveterry.com/wp-content/uploads/2015/12/vue.js.png'
    }, 4000)
  }

}
