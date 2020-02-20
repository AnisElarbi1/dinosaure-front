import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DinosaureService} from '../../services/dinosaure.service';
import {Dinosaure} from '../../models/Dinosaure';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  dinosaure: Dinosaure;
  message: string;


  signupForm = new FormGroup({
    utilisateur: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    race: new FormControl('', [Validators.required]),
    famille: new FormControl('', [Validators.required]),
    nourriture: new FormControl('', [Validators.required]),

  });

  constructor(private dinosaureService: DinosaureService, private router: Router) {
  }

  ngOnInit() {
    this.dinosaure = new Dinosaure();

  }

  signup() {
    this.dinosaure.username = this.signupForm.get('utilisateur').value;
    this.dinosaure.password = this.signupForm.get('password').value;
    this.dinosaure.race = this.signupForm.get('race').value;
    this.dinosaure.famille = this.signupForm.get('famille').value;
    this.dinosaure.norriture = this.signupForm.get('nourriture').value;
    this.dinosaureService.signupDinosaure(this.dinosaure).subscribe(data => {
        this.router.navigate(['/login']);
      },
      error => {
        this.message = error.error.message;
      });


  }



}


