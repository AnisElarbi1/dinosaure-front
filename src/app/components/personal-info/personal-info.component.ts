import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {DinosaureService} from '../../services/dinosaure.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  dinosaure: any;
  messageDeletedFriend: string;
  friends = [];

  constructor(private dinosaureService: DinosaureService, private router: Router) {
  }

  ngOnInit() {

    this.getFriendsList();


  }

  // supprimer de la liste d'amis
  unfriend(item) {

    this.dinosaureService.unfriend(item._id).subscribe(data => {
      this.getFriendsList();
      this.messageDeletedFriend = 'Vous avez supprimé ' + item.username + ' avec succées';
    });


  }


  getFriendsList() {
    this.friends = [];
    this.dinosaureService.getDinosaureById(sessionStorage.getItem(environment._ID)).subscribe(data => {
      this.dinosaure = data;

      for (const item of data.amis) {

        this.dinosaureService.getDinosaureById(item).subscribe(resp => {
            this.friends.push(resp);
          }
        );
      }

    });
  }

  redirectToUpdatePage() {
    this.router.navigate(['update-info']);
  }

}
