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
  private similarSubject = new BehaviorSubject<any>(null);

  detailsMovie$ = this.subject.asObservable();

  creditsMovie$ = this.creditsSubject.asObservable();

  similarMovie$ = this.similarSubject.asObservable();

  movieId: any;
  apikey = environments.apikey;
  favorites: any[] = [];

  getAllDetails(id: number) {
    this.subject.next(null);
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}&language=en-US`;

    this.httpclient.get(url).subscribe((data) => this.subject.next(data));
  }

  getAllCredits(id: number) {
    this.creditsSubject.next(null);
    const url2 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apikey}&language=en-US`;

    this.httpclient
      .get(url2)
      .subscribe((data) => this.creditsSubject.next(data));
  }

  getAllSimilar(id: number) {
    this.similarSubject.next(null);
    const url3 = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.apikey}&language=en-US`;

    this.httpclient
      .get(url3)
      .subscribe((data) => this.similarSubject.next(data));
  }

  addFavorites(movie: any) {
    this.favorites.push(movie);
  }

  getFavorites() {
    return this.favorites;
  }
  constructor(private httpclient: HttpClient) {}
}
