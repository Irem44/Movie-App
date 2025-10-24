import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../../services/details.service';

import { NgFor } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [NgFor],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  details: any;
  baseUrl = 'http://image.tmdb.org/t/p/w500';

  constructor(private detailsMovie: DetailsService) {}

  ngOnInit() {
    this.details = this.detailsMovie.getFavorites();
    console.log('detay', this.details);
  }
}
