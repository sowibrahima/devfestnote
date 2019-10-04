import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {

  public speakers: Array<{ name: string }> = [];

  constructor() { }

  ngOnInit() {
    this.getSpeakers();
  }

  getSpeakers() {
    this.speakers.push({
       name : "Delforges Alexis"
    });
    this.speakers.push({
      name : "Sow Ibrahima"
   });
  }

  

 

}
