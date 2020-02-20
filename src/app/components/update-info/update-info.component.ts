import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Dinosaure} from '../../models/Dinosaure';
import {DinosaureService} from '../../services/dinosaure.service';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

  dinosaure: Dinosaure;
  updateForm = new FormGroup({
    utilisateur: new FormControl({value: '', disabled: true}, [Validators.required]),
    race: new FormControl('', [Validators.required]),
    famille: new FormControl('', [Validators.required]),
    nourriture: new FormControl('', [Validators.required]),
  });

  message: string;

  constructor(private dinosaureService: DinosaureService, private router: Router) {
  }

  ngOnInit() {
    this.dinosaure = new Dinosaure();
    this.retreivePersonalInfo();
  }

  update() {

    this.dinosaure.famille = this.updateForm.get('famille').value;
    this.dinosaure.norriture = this.updateForm.get('nourriture').value;
    this.dinosaure.race = this.updateForm.get('race').value;
    this.dinosaureService.updateProfile(this.dinosaure).subscribe(data => {

      this.message = data.message;
    });

  }

  retreivePersonalInfo() {
    this.dinosaureService.getDinosaureById(sessionStorage.getItem(environment._ID)).subscribe(data => {

      this.updateForm.patchValue({
        utilisateur: data.username,
        password: data.password,
        race: data.race,
        famille: data.famille,
        nourriture: data.norriture,
      });
    }, error => {
      console.log(error.error.message);
    });
  }

  backToProfile() {
    this.router.navigate(['personal-info']);
  }

}
