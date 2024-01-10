import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  private timings: Record<string, number> = {};

  constructor() {
  }

  startTiming(key: string) {
    this.timings[key] = window.performance.now();
  }

  stopTiming(key: string) : number {
    const start = this.timings[key];
    if (start) {
      const end = window.performance.now();
      console.log(`Timing for ${key}: ${end - start}ms`);
      return end - start;
    } else {
      console.log(`No timing found for ${key}`);
      return 0;
    }
  }

  measurePageLoad() {
    this.startTiming('pageLoad');
    window.addEventListener('load', () => {
      this.stopTiming('pageLoad');
    });
  }

  measureDOMContentLoaded() {
    this.startTiming('DOMContentLoaded');
    window.addEventListener('DOMContentLoaded', () => {
      this.stopTiming('DOMContentLoaded');
    });
  }

  clearTimings() {
    this.timings = {};
  }
}
