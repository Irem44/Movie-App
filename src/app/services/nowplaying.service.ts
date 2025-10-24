import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environments } from '../../environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class NowplayingService {
  private subject = new BehaviorSubject<any>(null);
  nowPlaying$ = this.subject.asObservable();

  getAllNowPlaying() {
    if (this.subject.value) return;

    const apikey = environments.apikey;
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`;

    this.httpClient.get(url).subscribe({
      next: (data) => this.subject.next(data),
      error: (err) => console.log('Now Playing Service Error', err),
    });
  }

  constructor(private httpClient: HttpClient) {}
}
