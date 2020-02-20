import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DinosaureService {

  constructor(private httpClient: HttpClient) {
  }


  getDinosaureById(id) {
    return this.httpClient.get<any>(environment.API_BASE_URL + 'api/dinasaures/' + id);
  }

  signupDinosaure(dinosaure) {
    return this.httpClient.post(environment.API_BASE_URL + 'api/dinasaures/', dinosaure);
  }

  getAllDinosaures() {
    return this.httpClient.get<any>(environment.API_BASE_URL + 'api/dinasaures');
  }

  unfriend(friendId) {
    // sahbek aamelha POST fel node donc el post test7a9 body w puisque ma andnech body addito null
    // normalement DELETE mch POST

    return this.httpClient.post(environment.API_BASE_URL + 'api/dinasaures/friends/remove/'
      + sessionStorage.getItem(environment._ID) + '/' + friendId, null);
  }

  friend(friendId) {
    return this.httpClient.post(environment.API_BASE_URL + 'api/dinasaures/friends/add/'
      + sessionStorage.getItem(environment._ID) + '/' + friendId, null);

  }

  updateProfile(dinosaure) {
    return this.httpClient.put<any>(environment.API_BASE_URL + 'api/dinasaures/' + sessionStorage.getItem(environment._ID), dinosaure);
  }
}
