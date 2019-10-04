import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionRequestService } from '../services'

@Component({
  selector: 'app-speakers-details',
  templateUrl: './speakers-details.page.html',
  styleUrls: ['./speakers-details.page.scss'],
})
export class SpeakersDetailsPage implements OnInit {

  public myId : string;
  public speaker: any[];
  toogle:any

  speakers:any = []

  constructor(private request:SessionRequestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('name');
    this.getSpeaker(this.myId);    
  }

  getSpeaker(myId) {
    this.request.getSpeakers(data => {
      this.speakers = data;
      console.log(this.speakers);
      this.speaker = this.speakers["111"];
      //this.speaker = this.speakers[myId];
      console.log(this.speaker);
    })
  }

  onValChange(){
    console.log("oui");
  }
}
