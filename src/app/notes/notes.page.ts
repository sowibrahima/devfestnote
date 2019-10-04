import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RequestService } from '../services'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  sessionId: string
  public sessionData: any
  notes: string

  constructor(private route: ActivatedRoute, private request: RequestService) { }

  ngOnInit() {
    this.sessionId = this.route.snapshot.params['id'];
    this.request.getSessionDetail(this.sessionId, data => {
      this.sessionData = data

      this.request.getObject('notes/'+this.sessionData.id, response => {
        if(response)
          this.notes = response.value
      })
    })

    
  }

  saveNote() {
    this.request.setObject('notes/'+this.sessionData.id, this.notes)
  }
}
