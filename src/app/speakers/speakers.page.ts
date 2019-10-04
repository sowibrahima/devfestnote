import { Component, OnInit } from '@angular/core';

import { SessionRequestService } from '../services'

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {

  speakers:any = []

  constructor(private request:SessionRequestService) { }

  ngOnInit() {
    this.getSpeakers();
  }

  getSpeakers() {
    this.request.getSpeakers(data => {
      this.speakers = data;
    })
  }

  

 

}
