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

    getSpeakers(callback){
        return this.http.get(`${environment.apiUrl}/speakers`).subscribe(data => {
            callback(data);
        });
    }
}