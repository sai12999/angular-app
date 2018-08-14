import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverName = '';
  serverCreated = false;
  serverStatus = 'offline';
  serverCreateStatus = 'Server not created yet!';
  serverId = 10;
  allowClick = false;
  constructor() {
    setTimeout(() => {
      this.allowClick = true;
    }, 2500);
  }

  ngOnInit() {
  }
  getServerStatus() {
    return this.serverStatus;
  }
  getServerId() {
    return this.serverId;
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreateStatus = 'Server Created successfully!';
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
