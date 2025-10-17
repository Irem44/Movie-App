import { Routes } from '@angular/router';
import { PublicHomePageComponent } from './components/public-home-page/public-home-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PrivateHomePageComponent } from './components/private-home-page/private-home-page.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'publichome', pathMatch: 'full' },
  { path: 'publichome', component: PublicHomePageComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'privatehome', component: PrivateHomePageComponent },
  { path: 'details', component: DetailsComponent },
];
