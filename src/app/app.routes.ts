import { Routes } from '@angular/router';
import { PublicHomePageComponent } from './components/public-home-page/public-home-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PrivateHomePageComponent } from './components/private-home-page/private-home-page.component';
import { DetailsComponent } from './components/details/details.component';
import { CreditDetailComponent } from './components/credit-detail/credit-detail.component';
import { SearchComponent } from './components/search/search.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

export const routes: Routes = [
  { path: '', redirectTo: 'publichome', pathMatch: 'full' },
  { path: 'publichome', component: PublicHomePageComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'privatehome', component: PrivateHomePageComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'creditdetail', component: CreditDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'favorites', component: FavoritesComponent },
];
