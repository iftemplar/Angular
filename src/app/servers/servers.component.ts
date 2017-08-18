import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  disableTextarea = false;
  serverCreationStatus = 'No server was created !';

  // constructor() { 
  //   console.log('settimeout');  
  //   setTimeout(() => {
  //     this.allowNewServer = true;
  //   }, 4000);
  // }

  constructor() {
    console.log('settimeout');
    setTimeout(() => {
      console.log('settimeout');
      this.disableTextarea = true;
    }, 4000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created !';
  }

  onDeleteServer() {
    this.serverCreationStatus = 'The server was deleted !'
  }

  onUpdateServerName(event: any) {
    console.log(event);
  }

  AlertContext() {
    alert('Context menu is forbidden!');
  }

  DblClick() {
    console.log('Double clicked');
  }

  onFocusLog() {
    console.log('onfocus');
  }



}

