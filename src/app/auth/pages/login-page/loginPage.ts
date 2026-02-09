import { FormBuilder, Validators } from '@angular/forms';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login-page',
  imports: [RouterLink],
  templateUrl: './loginPage.html',
})
export class LoginPage {

  fb = inject(FormBuilder)
  hasError = signal(false);
  isPosting = signal(false);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if(this.loginForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
      return
    }
    const {email = '', password = '' } = this.loginForm.value;

    console.log({ email, password });

  }


}
