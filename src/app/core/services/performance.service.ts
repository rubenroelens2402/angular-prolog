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

  stopTiming(key: string) {
    const start = this.timings[key];
    if (start) {
      const end = window.performance.now();
      console.log(`Timing for ${key}: ${end - start}ms`);
    } else {
      console.log(`No timing found for ${key}`);
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
