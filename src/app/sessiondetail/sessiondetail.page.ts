import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RequestService } from '../services'


@Component({
  selector: 'app-sessiondetail',
  templateUrl: './sessiondetail.page.html',
  styleUrls: ['./sessiondetail.page.scss'],
})
export class SessiondetailPage implements OnInit {

  
  sessionId: string
  public sessionData: any
  public sessionSpeakers: any


  constructor(private route: ActivatedRoute, private request:RequestService) {  
  }

  ngOnInit() {
    this.sessionId = this.route.snapshot.params['id'];
    this.request.getSessionDetail(this.sessionId, data=>{
      this.sessionData = data

      this.request.getSessionSpeakers(this.sessionData.id, response => {
        this.sessionSpeakers = response
      })
    })
  }

}
