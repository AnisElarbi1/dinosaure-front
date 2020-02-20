import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  authenticate(username, password) {

    return this.httpClient.post<any>(environment.API_BASE_URL + 'api/login', {
      username,
      password,
    });

  }


  logout() {
    sessionStorage.removeItem(environment._ID);
  }

  isUserLoggedIn() {
    const utilisateur = sessionStorage.getItem(environment._ID);
    return !(utilisateur === null);
  }

}
