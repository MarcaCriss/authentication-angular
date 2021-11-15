import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    //console.log(this.form.value);
    this.authService.login(this.form.value).subscribe(
      (data) => {
        this.router.navigate(['admin']);
      }
    );
  }

  get emailNoValido() {
    return (
      this.form.get('email')?.errors?.['required'] &&
      this.form.get('email')?.touched
    );
  }

  get emailInvalid() {
    return (
      this.form.get('email')?.errors?.['email'] &&
      this.form.get('email')?.touched
    );
  }

  get passwordNoValido() {
    return (
      this.form.get('password')?.errors?.['required'] &&
      this.form.get('password')?.touched
    );
  }
}
