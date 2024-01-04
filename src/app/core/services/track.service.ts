import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITrack } from '../interfaces/track';
import { Observable, delay, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http : HttpClient) { }

  getTracks() : Observable<ITrack[]> {
    return this.http.get<ITrack[]>('/api/tracks').pipe(
      tap(data => console.log(data)),
      map((tracks : any) => tracks.map((track: ITrack) => ({
        id: track.id,
        title: track.title,
        artists: track.artists,
        album: track.album,
        label: track.label,
        date: new Date(track.date),
        length: track.length,
        bpm: track.bpm,
        key: track.key
      }))
    ));
  }
}
