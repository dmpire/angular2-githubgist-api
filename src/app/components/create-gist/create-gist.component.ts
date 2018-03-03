import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-create-gist',
  templateUrl: './create-gist.component.html',
  styleUrls: ['./create-gist.component.css']
})
export class CreateGistComponent implements OnInit {
  newGist: any;

  ngOnInit() {
  }

  constructor(private _githubService: GithubService) {

  }

 add() {
   console.log(this.newGist);
 }

}
