import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environments } from '../../environments/environment.local';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UpcomingService {
  private subject = new BehaviorSubject<any>(null);

  upComingMovies$ = this.subject.asObservable();

  getAllUpComing() {
    const apikey = environments.apikey;
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=2`;

    this.httpclient.get(url).subscribe({
      next: (data) => this.subject.next(data),
      error: (err) => console.log('Up Coming Service Error', err),
    });
  }

  constructor(private httpclient: HttpClient) {}
}
