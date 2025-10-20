import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { environments } from '../../environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  private subject = new BehaviorSubject<any>(null);
  private creditsSubject = new BehaviorSubject<any>(null);

  detailsMovie$ = this.subject.asObservable();

  creditsMovie$ = this.creditsSubject.asObservable();

  movieId: any;
  apikey = environments.apikey;

  getAllDetails(id: number) {
    if (this.movieId === id && this.subject.value) return;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}&language=en-US`;
    const url2 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apikey}&language=en-US`;
    this.movieId = id;

    this.httpclient.get(url).subscribe((data) => this.subject.next(data));
    this.httpclient
      .get(url2)
      .subscribe((data) => this.creditsSubject.next(data));
  }

  constructor(private httpclient: HttpClient) {}
}
