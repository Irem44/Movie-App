import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../../services/details.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { FooterComponent } from '../footer/footer.component';
import { UpButtonComponent } from '../up-button/up-button.component';
import { FavoritesComponent } from '../favorites/favorites.component';

@Component({
  selector: 'app-details',
  imports: [NgFor, FooterComponent, NgIf, UpButtonComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  baseUrl = 'http://image.tmdb.org/t/p/w500';
  movieDetail: any;
  movieCredist: any;
  movieSimilar: any;

  similarMovieDetail: any;
  notSimilar: boolean = false;

  constructor(
    public detailService: DetailsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const id = params['id'];

      if (id) {
        this.detailService.getAllDetails(id);
        this.detailService.getAllCredits(id);
        this.detailService.getAllSimilar(id);

        this.detailService.detailsMovie$.subscribe((data) => {
          this.movieDetail = data;

          console.log('Veri geldi', this.movieDetail);
        });

        this.detailService.creditsMovie$.subscribe((data) => {
          this.movieCredist = data;
          console.log('Credits', this.movieCredist);
        });

        this.detailService.similarMovie$.subscribe((data) => {
          const results = data.results;

          if (results && results.length > 0) {
            this.movieSimilar = data.results;
          }

          console.log('Similar', this.movieSimilar);
        });
      }
    });
  }

  creditsDetail(cName: any, rName: any, popularity: any, profile: any) {
    this.router.navigate(['creditdetail'], {
      queryParams: {
        cName,
        rName,
        popularity,
        profile,
      },
    });
  }

  similarMovieDetails(id: number) {
    this.router.navigate(['details'], {
      queryParams: { id },
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

  send(movie: any) {
    this.detailService.addFavorites(movie);
  }
}
