import {Component, OnInit} from '@angular/core';
import {DinosaureService} from '../../services/dinosaure.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-dinosaurs',
  templateUrl: './dinosaurs.component.html',
  styleUrls: ['./dinosaurs.component.css']
})
export class DinosaursComponent implements OnInit {

  dinosaurs = [];
  messageAddedFriend: string;


  constructor(private dinosaureService: DinosaureService) {
  }

  ngOnInit() {
    this.refreshList();
  }

  addToFriendList(dinosaure) {

    this.dinosaureService.friend(dinosaure._id).subscribe(data => {
      this.messageAddedFriend = 'Vous avez ajouté ' + dinosaure.username + ' à votre liste d\'amis avec succées';
      this.refreshList();
    });
  }


  refreshList() {
    this.dinosaurs = [];
    this.dinosaureService.getAllDinosaures().subscribe(data => {
      this.dinosaurs = data.dinasaures;

      // pour eliminier le dinoseur déja connecté
      const currentDinosaur = this.dinosaurs.find(e => e._id === sessionStorage.getItem(environment._ID));
      this.dinosaurs.splice(this.dinosaurs.indexOf(currentDinosaur), 1);

      // pour eliminier les dinoseurs qui sont déja amsi avec lui
      this.dinosaurs = this.dinosaurs.filter(x => !currentDinosaur.amis.filter(y => y._id === x._id).length);

    });
  }


}
