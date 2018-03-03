import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Array<any>;
  gists: Array<any>;
  usergist: Array<any>;

  ngOnInit() {
  }
  // Inject the service as a dependency
  constructor( private _githubService: GithubService) {
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
