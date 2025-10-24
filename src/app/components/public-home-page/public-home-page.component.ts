import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import { CommonModule } from '@angular/common';

import { PopulerMovieService } from '../../services/populer-movie.service';
import { FooterComponent } from '../footer/footer.component';
import { UpButtonComponent } from '../up-button/up-button.component';
import { DetailsService } from '../../services/details.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-public-home-page',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FooterComponent, UpButtonComponent],
  templateUrl: './public-home-page.component.html',
  styleUrls: ['./public-home-page.component.scss'],
})
export class PublicHomePageComponent implements OnInit {
  movies: any;
  baseUrl = 'http://image.tmdb.org/t/p/w500';
  @ViewChild('sliderRef', { static: false }) sliderRef!: ElementRef;
  detailsService: any;

  constructor(
    private populerMovie: PopulerMovieService,
    private detailService: DetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.populerMovie.populerMovie$.subscribe({
      next: (data) => {
        this.movies = data;
      },
    });

    this.populerMovie.getAllPopulerMovie();
  }

  scrollAmount = 280;

  scrollLeft() {
    this.sliderRef.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.sliderRef.nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth',
    });
  }

  details(id: number) {
    this.router.navigate(['details'], { queryParams: { id } });
  }
}
