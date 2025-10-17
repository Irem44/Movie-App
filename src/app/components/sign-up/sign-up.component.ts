import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BackgroundComponent } from '../background/background.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, BackgroundComponent, FooterComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  frm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.frm = formbuilder.group({
      name: [''],
      surname: [''],
      email: [''],
      password: [''],
    });
  }

  onSubmit(data: any) {
    console.log(data);
  }
  signup() {
    this.router.navigate(['privatehome']);
  }
}
