import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NowplayingService } from '../../services/nowplaying.service';

import { CommonModule } from '@angular/common';
import { PopulerMovieService } from '../../services/populer-movie.service';
import { TopratedService } from '../../services/toprated.service';
import { UpcomingService } from '../../services/upcoming.service';
import { DetailsService } from '../../services/details.service';
import { filter } from 'rxjs';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { UpButtonComponent } from '../up-button/up-button.component';

@Component({
  selector: 'app-private-home-page',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './private-home-page.component.html',
  styleUrl: './private-home-page.component.scss',
})
export class PrivateHomePageComponent implements OnInit {
  baseUrl = 'http://image.tmdb.org/t/p/w500';

  nowPlayingMovies: any;
  populerMovies: any;
  topRatedMovies: any;
  upComingMovies: any;
  detailsMovies: any;
  detailsid: any;
  @ViewChild('sliderRef', { static: false }) sliderRef!: ElementRef;

  constructor(
    private nowPlayingService: NowplayingService,
    private populerService: PopulerMovieService,
    private topRatedService: TopratedService,
    private upComingService: UpcomingService,
    private detailsService: DetailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.nowPlayingService.getAllNowPlaying();
    this.populerService.getAllPopulerMovie();
    this.topRatedService.getAllTopRated();
    this.upComingService.getAllUpComing();

    this.nowPlayingService.nowPlaying$.subscribe({
      next: (data) => {
        this.nowPlayingMovies = data.results;

        console.log('Now Playing Movies', this.nowPlayingMovies);
      },
    });
    this.populerService.populerMovie$.subscribe({
      next: (data) => (this.populerMovies = data.results),
    });

    this.topRatedService.topRatedMovies$.subscribe({
      next: (data) => (this.topRatedMovies = data.results),
    });

    this.upComingService.upComingMovies$.subscribe({
      next: (data) => (this.upComingMovies = data.results),
    });
  }

  details(id: number) {
    this.detailsService.getAllDetails(id);
    this.detailsService.getAllCredits(id);
    this.detailsService.getAllSimilar(id);

    this.detailsService.detailsMovie$.subscribe({
      next: (data) => {
        this.detailsMovies = data;
        this.router.navigate(['details'], {
          queryParams: { id },
        });
      },
    });
  }

  scrollAmount = 280;

  scrollLeft(slider: HTMLElement) {
    slider.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth',
    });
  }

  scrollRight(slider: HTMLElement) {
    slider.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth',
    });
  }

  favorites() {
    this.router.navigate(['favorites']);
  }
}
