import { Component, OnInit, ViewChild } from '@angular/core';
import { NowplayingService } from '../../services/nowplaying.service';
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { PopulerMovieService } from '../../services/populer-movie.service';
import { TopratedService } from '../../services/toprated.service';
import { UpcomingService } from '../../services/upcoming.service';
import { DetailsService } from '../../services/details.service';
import { filter } from 'rxjs';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-home-page',
  imports: [SlickCarouselModule, CommonModule, RouterOutlet],
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

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false,
  };

  slickNext(slider: SlickCarouselComponent) {
    slider.slickNext();
  }

  slickPrev(slider: SlickCarouselComponent) {
    slider.slickPrev();
  }

  details(id: number) {
    this.detailsService.getAllDetails(id);

    this.detailsService.detailsMovie$.subscribe({
      next: (data) => {
        this.detailsMovies = data;
        this.router.navigate(['details'], {
          queryParams: { id },
        });
      },
    });
  }
}
