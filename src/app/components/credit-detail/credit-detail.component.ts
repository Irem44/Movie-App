import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-credit-detail',
  imports: [FooterComponent],
  templateUrl: './credit-detail.component.html',
  styleUrl: './credit-detail.component.scss',
})
export class CreditDetailComponent implements OnInit {
  baseUrl = 'http://image.tmdb.org/t/p/w500';
  constructor(
    private detailsService: DetailsService,
    private activatedRout: ActivatedRoute
  ) {}

  characterName: any;
  reallName: any;
  popularity: any;
  profile: any;

  ngOnInit() {
    this.activatedRout.queryParams.subscribe({
      next: (params) => {
        this.characterName = params['cName'];
        this.reallName = params['rName'];
        this.popularity = params['popularity'];
        this.profile = params['profile'];

        console.log(this.characterName);
      },
    });
  }
}
