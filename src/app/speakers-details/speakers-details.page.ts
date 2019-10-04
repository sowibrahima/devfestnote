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
  public isToggled: boolean;

  toogle: any


  constructor(private request: RequestService, private activatedRoute: ActivatedRoute) {
    this.isToggled = false;
  }

  ngOnInit() {
    this.speakerId = this.activatedRoute.snapshot.params['id'];
    this.request.getSpeakerDetail(this.speakerId, data => {
      this.speakerData = data
      this.request.getSpeakerSessions(this.speakerData.id, response => {
        this.speakerSessions = response
      })
    })
  }

  onValChange() {
    /*
    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null, this.speakerData.name.split("")[1], this.speakerData.name.split("")[0]);
    contact.phoneNumbers = [new ContactField('mobile', '')];
    contact.save().then(
      () => console.log('Contact saved!', contact),
      (error: any) => console.error('Error saving contact.', error)
    );
    */
  }
}
