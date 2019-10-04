import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { SessionRequestService } from '../services'

@Component({
  selector: 'app-sessiondetail',
  templateUrl: './sessiondetail.page.html',
  styleUrls: ['./sessiondetail.page.scss'],
})
export class SessiondetailPage implements OnInit {

  sessionId: string
  speaker: any

  constructor(private route: ActivatedRoute, private request:SessionRequestService) { }

  ngOnInit() {
    this.sessionId = this.route.snapshot.paramMap.get("id")
    this.request.getSessionDetail(this.sessionId, data => {
      this.speaker = data
    })
  }

}
