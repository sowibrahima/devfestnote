import { Component, OnInit } from '@angular/core';

import { SessionRequestService } from '../services'

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {

  sessionsData:any = []

  constructor(private request:SessionRequestService) { }

  ngOnInit() {
    this.request.getSessions(data => {
      this.sessionsData = data;
    })
  }

}
