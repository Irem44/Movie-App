import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicHomePageComponent } from './components/public-home-page/public-home-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'movie-app';
}
