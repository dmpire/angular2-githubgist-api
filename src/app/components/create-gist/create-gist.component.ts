import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Gist } from '../../models/gist';
import { GistFile } from '../../models/gist-file';

@Component({
  selector: 'app-create-gist',
  templateUrl: './create-gist.component.html',
  styleUrls: ['./create-gist.component.css']
})
export class CreateGistComponent implements OnInit {

  newGist = new Gist();

  ngOnInit() {
    this.newGist.files.push(new GistFile());
  }

  constructor(private _githubService: GithubService) {

  }

  removeFile(i: number) {

    console.log(this.newGist.files.length);

    this.newGist.files.splice(i, 1);
  }

  addNewFile() {
    this.newGist.files.push(new GistFile());
  }
  add() {
    this._githubService.createGist(this.newGist).subscribe(res => console.log(res));
    console.log(this.newGist);
  }

}
