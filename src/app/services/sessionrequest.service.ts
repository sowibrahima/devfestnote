import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SessionRequestService {

    constructor(private http: HttpClient) {
    }

    getSessions(callback){
        return this.http.get(`${environment.apiUrl}/sessions`).subscribe(data => {
            callback(data);
        });
    }

    getSessionDetail(sessionId, callback){
        return this.http.get(`${environment.apiUrl}/sessions/${sessionId}`).subscribe(data => {
            callback(data);
        });
    }
}