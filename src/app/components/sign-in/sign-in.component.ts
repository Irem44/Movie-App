import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BackgroundComponent } from '../background/background.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, BackgroundComponent, FooterComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  frm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.frm = formbuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit(data: any) {
    console.log(data);
  }
  signin() {
    this.router.navigate(['privatehome']);
  }
}
