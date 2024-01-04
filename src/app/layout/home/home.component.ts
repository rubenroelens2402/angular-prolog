import { Component, OnInit } from '@angular/core';
import { ITrack } from '@app/core/interfaces/track';
import { TrackService } from '@app/core/services/track.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _destroying$ = new Subject<void>();

  tracks : ITrack[] = [];

  title = 'Angular Material';

  constructor(private trackService: TrackService){}

  ngOnInit(): void {
    this.trackService.getTracks().subscribe(tracks => {
      this.tracks = tracks;
      console.log(this.tracks);
    });
  }

}
