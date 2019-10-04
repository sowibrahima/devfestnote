import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {

  public speakers: Array<{ name: string; surname: string; }> = [];

  constructor() { }

  ngOnInit() {
    this.getSpeakers();
  }

  getSpeakers() {
    this.speakers.push({
       name : "Delforges",
       surname : "Alexis"
    });
    this.speakers.push({
      name : "Sow",
      surname : "Ibrahima"
   });
  }

  

 

}
