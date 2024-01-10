import { Component, OnInit } from '@angular/core';
import { PerformanceService } from './core/services/performance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-rick-and-morty-api';

  constructor(private performanceService: PerformanceService) { }

  ngOnInit(): void {
    // console.log('AppComponent initialized');
    this.performanceService.measureDOMContentLoaded();
    this.performanceService.measurePageLoad();
  }

}
