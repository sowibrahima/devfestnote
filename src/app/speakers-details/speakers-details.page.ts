import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../services'

@Component({
  selector: 'app-speakers-details',
  templateUrl: './speakers-details.page.html',
  styleUrls: ['./speakers-details.page.scss'],
})
export class SpeakersDetailsPage implements OnInit {

  speakerId: string
  public speakerData: any
  public speakerSessions: any

  toogle:any


  constructor(private request:RequestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.speakerId = this.activatedRoute.snapshot.params['id'];
    this.request.getSpeakerDetail(this.speakerId, data=>{
      console.log(data);
     this.speakerData = data
     this.request.getSpeakerSessions(this.speakerData.id, response => {
       this.speakerSessions = response
     })
   })
  }

  onValChange(){
    console.log("oui");
  }
}
