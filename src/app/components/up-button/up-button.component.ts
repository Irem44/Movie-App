import { Component } from '@angular/core';

@Component({
  selector: 'app-up-button',
  imports: [],
  templateUrl: './up-button.component.html',
  styleUrl: './up-button.component.scss',
})
export class UpButtonComponent {
  up() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
