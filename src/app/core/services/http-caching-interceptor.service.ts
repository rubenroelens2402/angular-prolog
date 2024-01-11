import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpCachingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cacheKey = req.urlWithParams;
    // ignore non-http requests
    if (!req || !req.url) return next.handle(req);
    // only cache GET requests
    if (req.method !== 'GET') return next.handle(req);
    // check if request is in cache
    const cachedReponse = localStorage.getItem(cacheKey);
    // if cached response exists and if its not expired, return it
    if (cachedReponse && JSON.parse(cachedReponse).expiry > new Date().getTime()) {
      console.log(`returning ${cacheKey} from cache, cache still valid for ${((JSON.parse(cachedReponse).expiry - new Date().getTime()) / 1000 / 60 / 60).toFixed(2)} hours`);
      return of(new HttpResponse({ body: JSON.parse(cachedReponse).value }));
    } // else make the call and cache the response
    return next.handle(req).pipe(
      // intercept the response and cache it
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log(event);
          const response = {
            value: event.body,
            expiry: new Date().getTime() + 24 * 60 * 60 * 1000 //  1 day seconds
          }
          localStorage.setItem(cacheKey, JSON.stringify(response));
        }
      })
    );

  }
}
