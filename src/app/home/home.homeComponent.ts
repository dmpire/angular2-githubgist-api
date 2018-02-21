import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.homeComponent.html',
})
export class HomeComponent  {
  user: Array<any>;
  // Inject the service as a dependency
  constructor( private _githubService: GithubService){
    this._githubService.getUser().subscribe(user => {
      // console.log(user);
      this.user = user;
    });
  }
 }
