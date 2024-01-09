import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ILocation } from '../../core/interfaces/location';
import { LocationService } from '../../core/services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  
  private _destroying$ = new Subject<void>();

  locations: ILocation[] = [];

  constructor(private locationService: LocationService, private router: Router) { }

  ngOnInit(): void {
    this.locationService.getAllLocations().subscribe(locations => {
      this.locations = locations;
    });
  }

  navigateToDetail(id: number): void {
    this.router.navigate([`/locations/${id}`]);
  }

  ngOnDestroy(): void {
    this._destroying$.next();
    this._destroying$.complete();
  }

}
