import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speakers-details',
  templateUrl: './speakers-details.page.html',
  styleUrls: ['./speakers-details.page.scss'],
})
export class SpeakersDetailsPage implements OnInit {

  public myId : string;
  public speaker: { name: string; photoUrl: string; bio: string; presentations : string[]}

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('name');
    console.log(this.myId);
    this.getSpeaker();
  }

  getSpeaker() {
    this.speaker = {
      name : "Delforges Alexis",
      photoUrl : "",
      bio : "Best front-end dev in the world",
      presentations : [ "Angular", "Ionic", "Cordova"]
    };
  }

}
