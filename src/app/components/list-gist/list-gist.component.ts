import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Gist } from '../../models/gist';

@Component({
  selector: 'app-list-gist',
  templateUrl: './list-gist.component.html',
  styleUrls: ['./list-gist.component.css']
})
export class ListGistComponent implements OnInit {

  user: Array<any>;
  usergist: Array<any>;
  gistList: Array<Gist>;

  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => {
      // console.log(user);
      this.user = user;
    });

    this._githubService.getUserGist().subscribe(usergist => {
      // console.log(usergist);
      this.usergist = usergist;
    });
  }

  ngOnInit() {
    this._githubService.getUserGist().subscribe(res => {
      this.gistList = res;
    });
  }

}
