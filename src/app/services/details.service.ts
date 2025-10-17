import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environments } from '../../environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  private subject = new BehaviorSubject<any>(null);
  private creditsSubject = new BehaviorSubject<any>(null);

  detailsMovie$ = this.subject.asObservable();

  creaditsMovie$ = this.creditsSubject.asObservable();

  movieId: any;
  apikey = environments.apikey;

  getAllDetails(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}&language=en-US`;

    this.httpclient.get(url).subscribe({
      next: (data) => this.subject.next(data),
      error: (err) => console.log('Details Movie Service', err),
    });
    const url2 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apikey}&language=en-US`;

    this.httpclient.get(url2).subscribe({
      next: (data) => this.creditsSubject.next(data),
      error: (err) => console.log('All Credits', err),
    });
  }

  constructor(private httpclient: HttpClient) {}
}
