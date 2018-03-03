import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Gist } from '../../models/gist';

@Component({
  selector: 'app-list-gist',
  templateUrl: './list-gist.component.html',
  styleUrls: ['./list-gist.component.css']
})
export class ListGistComponent implements OnInit {

  gistList: Array<Gist>;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this._githubService.getUserGist().subscribe(res => {
      this.gistList = res;
    });
  }

}
