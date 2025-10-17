import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import { CommonModule } from '@angular/common';
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';
import { PopulerMovieService } from '../../services/populer-movie.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-public-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    SlickCarouselModule,
    FooterComponent,
  ],
  templateUrl: './public-home-page.component.html',
  styleUrls: ['./public-home-page.component.scss'],
})
export class PublicHomePageComponent implements OnInit {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  movies: any;
  baseUrl = 'http://image.tmdb.org/t/p/w500';

  constructor(private populerMovie: PopulerMovieService) {}

  ngOnInit(): void {
    this.populerMovie.populerMovie$.subscribe({
      next: (data) => {
        this.movies = data;
      },
    });

    this.populerMovie.getAllPopulerMovie();
  }

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false,
  };

  slickNext() {
    this.slickModal.slickNext();
  }

  slickPrev() {
    this.slickModal.slickPrev();
  }
}
