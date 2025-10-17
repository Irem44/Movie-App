import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environments } from '../../environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class PopulerMovieService {
  private subject = new BehaviorSubject<any>(null);

  populerMovie$ = this.subject.asObservable();

  getAllPopulerMovie() {
    const apikey = environments.apikey;

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=2`;

    this.httpClient.get(url).subscribe({
      next: (data) => {
        this.subject.next(data);
        console.log(data);
      },
      error: (err) => console.log('Hata oluştu', err),
    });
  }

  constructor(private httpClient: HttpClient) {}
}
