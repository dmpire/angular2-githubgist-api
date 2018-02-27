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
  gists: Array<any>;
  usergist: Array<any>;
  // Inject the service as a dependency
  constructor( private _githubService: GithubService){
    this._githubService.getUser().subscribe(user => {
      // console.log(user);
      this.user = user;
    });

    this._githubService.getPublicGist().subscribe(gists => {
      // console.log(gist);
      this.gists = gists;
    });

    this._githubService.getUserGist().subscribe(usergist => {
      // console.log(usergist);
      this.usergist = usergist;
    });

  }
 }
