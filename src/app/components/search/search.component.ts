import { Component, OnInit } from '@angular/core';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { NowplayingService } from '../../services/nowplaying.service';
import { PopulerMovieService } from '../../services/populer-movie.service';
import { TopratedService } from '../../services/toprated.service';
import { UpcomingService } from '../../services/upcoming.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { UpButtonComponent } from '../up-button/up-button.component';

@Component({
  selector: 'app-search',
  imports: [FormsModule, NgFor, NgIf, UpButtonComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  inputData: any;
  allMovie: any[] = [];
  filteredMovies: any[] = [];
  query: any;
  baseUrl = 'http://image.tmdb.org/t/p/w500';
  constructor(
    private router: Router,
    private nowPlaying: NowplayingService,
    private populer: PopulerMovieService,
    private topRated: TopratedService,
    private upComing: UpcomingService
  ) {}

  ngOnInit() {
    this.nowPlaying.getAllNowPlaying();
    this.populer.getAllPopulerMovie();
    this.topRated.getAllTopRated();
    this.upComing.getAllUpComing();

    // now playing
    this.nowPlaying.nowPlaying$.subscribe({
      next: (data) => {
        for (const movie of data.results as []) {
          this.allMovie.push(movie);
        }
      },
    });

    //populer
    this.populer.populerMovie$.subscribe({
      next: (data) => {
        for (const movie of data.results as []) {
          this.allMovie.push(movie);
        }
      },
    });

    //toprated
    this.topRated.topRatedMovies$.subscribe({
      next: (data) => {
        for (const movie of data.results as []) {
          this.allMovie.push(movie);
        }
      },
    });

    //upcoming
    this.upComing.upComingMovies$.subscribe({
      next: (data) => {
        for (const movie of data.results as []) {
          this.allMovie.push(movie);
        }
        console.log('All movie', this.allMovie);
      },
    });

    this.filteredMovies = [...this.allMovie];
  }

  onSearchChange() {
    this.query = this.inputData ? this.inputData.toLowerCase() : '';

    this.filteredMovies = this.query
      ? this.allMovie.filter((data) =>
          data.title.toLowerCase().includes(this.query)
        )
      : [];

    console.log(this.filteredMovies);
  }

  details(id: number) {
    this.router.navigate(['details'], {
      queryParams: { id },
    });
  }
}
