import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  hide = true;
  user: any;
  loginForm!: FormGroup;

  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }, { updateOn: 'submit' });
  }

  userLogin() {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe(res => {
        if (res != null) {
          this.user = res;
          localStorage.setItem('userId', this.user.id);
          this.router.navigate(['/ELearning/courses']);
        } else {
          console.log("not found");
          console.log(res);
        }
      });
    }
  }

  getErrorMessage1() {
    if (this.loginForm.get('username')!.hasError('required')) {
      return 'Username is required';
    }
    return '';
  }

  getErrorMessage2() {
    if (this.loginForm.get('password')!.hasError('required')) {
      return 'Password is required';
    }
    return '';
  }
}
