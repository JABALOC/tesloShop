import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register-page.html',
})
export class RegisterPage {

fb = inject(FormBuilder)
  hasError = signal(false);
  isPosting = signal(false);
  router = inject(Router);
  baseUrl = environment.BaseUrl

  authService = inject(AuthService);

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    fullName: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if(this.registerForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
      return
    }
    const {email = '', password = '', fullName = '' } = this.registerForm.value;

    this.authService
      .register(email!, password!, fullName!)
      .subscribe(isAutenticated => {
        if (isAutenticated) {
          this.router.navigateByUrl('/');
          return;
        }

        this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
    })

  }

}
