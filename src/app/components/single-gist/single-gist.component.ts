import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { Gist } from '../../models/gist';

@Component({
  selector: 'app-single-gist',
  templateUrl: './single-gist.component.html',
  styleUrls: ['./single-gist.component.css']
})
export class SingleGistComponent implements OnInit {

  gistId: string;
  gist: Gist;

  constructor(private _route: ActivatedRoute, private _githubService: GithubService) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.gistId = params['id'];
      this._githubService.getSingleGist(this.gistId).subscribe(res => {
        console.log(res);
        this.gist = res;
      });
    });
  }

}
