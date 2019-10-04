import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class RequestService {

    constructor(private http: HttpClient) {

    }

    // Update sessions into the storage 
    getSessionsRequest(callback) {
        return this.http.get(`${environment.apiUrl}/sessions`).subscribe(data => {
            // Add data to storage
            this.setObject("sessions", data)
            this.setObject("last_request_sessions", Date.now())

            // Return data
            callback(data);
        });
    }

    // Get all sessions
    getSessions(callback) {
        // Check time
        this.getObject("last_request_sessions", time => {
            if (time == undefined || (time < Date.now() - 300000)) {
                // Update data
                this.getSessionsRequest(newData => {
                    this.setObject("sessions", newData)
                    callback(newData)
                })
                return;
            }
        })

        this.getObject("sessions", data => {
            callback(data.value)
        })
    }

    // Get session by Id
    getSessionDetail(sessionId, callback) {
        // Check time
        this.getObject("last_request_sessions", time => {
            if (time == undefined || (time < Date.now() - 300000)) {
                // Update data
                this.getSessionsRequest(newData => {
                    this.setObject("sessions", newData)
                    callback(newData[sessionId])
                })
                return;
            }
        })

        this.getSessions(data => {
            let sessionDetail = data[sessionId]

            if (sessionDetail == null) {
                this.getSessionsRequest(newData => {
                    callback(newData[sessionId])
                })
            }
            else
                callback(sessionDetail)
        })
    }

    /*******************************************/


    // Update speakers into the storage
    getSpeakersRequest(callback) {
        return this.http.get(`${environment.apiUrl}/speakers`).subscribe(data => {
            // Add data to storage
            this.setObject("speakers", data)
            this.setObject("last_request_speakers", Date.now())

            // Return data
            callback(data);
        });
    }

    // Get all speakers
    getSpeakers(callback) {
        // Check time
        this.getObject("last_request_speakers", time => {
            if (time == undefined || (time < Date.now() - 300000)) {
                // Update data
                this.getSpeakersRequest(newData => {
                    this.setObject("speakers", newData)
                    callback(newData)
                })
                return;
            }
        })

        this.getObject("speakers", data => {
            callback(data.value)
        })
    }

    // Get speaker details by Id
    getSpeakerDetail(speakerId, callback) {
        // Check time
        this.getObject("last_request_speakers", time => {
            if (time == undefined || (time < Date.now() - 300000)) {
                // Update data
                this.getSpeakersRequest(newData => {
                    this.setObject("speakers", newData)
                    callback(newData[speakerId])
                })
                return;
            }
        })

        this.getSpeakers(data => {
            let speakerDetail = data[speakerId]

            if (speakerDetail == null) {
                this.getSpeakersRequest(newData => {
                    callback(newData[speakerId])
                })
            }
            else
                callback(speakerDetail)
        })
    }



    // Get speakers of a certain session
    getSessionSpeakers(sessionId, callback) {
        this.getSpeakers(speakers => {
            this.getSessionDetail(sessionId, session => {
                let sessionSpeakers = []
                for (let speakerKey in session.speakers) {
                    sessionSpeakers.push(speakers[session.speakers[speakerKey]])
                }

                callback(sessionSpeakers);
            })
        })
    }

    // Get sessions of a certain speaker
    getSpeakerSessions(speakerId, callback) {
        this.getSessions(sessions => {
            let speakerSessions = []
            Object.keys(sessions).forEach(key => {
                if (sessions[key].speakers && sessions[key].speakers.includes(speakerId))
                    speakerSessions.push(sessions[key])
            });

            callback(speakerSessions);
        })
    }


    // Add object
    async setObject(key, value) {
        await Storage.set({
            key: key,
            value: JSON.stringify({ value })
        });
    }

    // Get object
    async getObject(key, callback) {
        const res = await Storage.get({ key: key })
        callback(JSON.parse(res.value))
    }
}