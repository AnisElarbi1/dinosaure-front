import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  errorMessage: string;
  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),

  });

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  authenticate() {

    this.authenticationService
      .authenticate(this.userForm.get('username').value, this.userForm.get('password').value)
      .subscribe(data => {
        sessionStorage.setItem(environment._ID, data.dinasaure._id);
        this.router.navigate(['personal-info']);
      }, error => {
        this.errorMessage = error.error.message;

      });
  }

}
