import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../../services/details.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';

@Component({
  selector: 'app-details',
  imports: [NgFor, SlickCarouselModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  baseUrl = 'http://image.tmdb.org/t/p/w500';
  movieDetail: any;
  movieCredist: any;

  constructor(
    public detailService: DetailsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.detailService.getAllDetails(id);

        this.detailService.detailsMovie$.subscribe((data) => {
          this.movieDetail = data;
          console.log('Veri geldi', this.movieDetail);
        });

        this.detailService.creaditsMovie$.subscribe((data) => {
          this.movieCredist = data;
          console.log('Credits Veri geldi', this.movieCredist);
        });
      }
    });
  }

  slideConfig = {
    slidesToShow: 5,
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
}
