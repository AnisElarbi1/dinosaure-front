import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './components/error/error.component';
import {LogoutComponent} from './components/logout/logout.component';
import {LoginComponent} from './components/login/login.component';
import {PersonalInfoComponent} from './components/personal-info/personal-info.component';
import {SignupComponent} from './components/signup/signup.component';
import {DinosaursComponent} from './components/dinosaurs/dinosaurs.component';
import {UpdateInfoComponent} from './components/update-info/update-info.component';
import {RouteGuardService} from './services/route-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'signup', component: SignupComponent},
  {path: 'dinosaurs', component: DinosaursComponent, canActivate: [RouteGuardService]},
  {path: 'personal-info', component: PersonalInfoComponent, canActivate: [RouteGuardService]},
  {path: 'update-info', component: UpdateInfoComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
