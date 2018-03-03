import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Gist } from '../models/gist';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;

  constructor(private _http: Http) {
      console.log('Github Service Ready...');
      this.username = 'dmpire';
  }

  getUser() {
      return this._http.get('https://api.github.com/users/' + this.username)
          .map(res => res.json());
  // res stands for response. We are getting the response in json format.
  }

  getUserGist() {
      return this._http.get('https://api.github.com/users/' + this.username + '/gists')
          .map(res => res.json());
  }

  getPublicGist() {
      return this._http.get('https://api.github.com/gists/public')
          .map(res => res.json());
  }

  createGist(newGist: Gist) {
      const createGistRequest = {
          'description': newGist.description,
          'public': newGist.public_,
          'files': newGist.files
      };
      return this._http.post('https://api.github.com/gists', createGistRequest)
          .map(res => res.json());
  }

  editGist(id: string, gist: Gist) {
      const editGistRequest = {
          'description': gist.description,
          'public': gist.public_,
          'files': gist.files
      };
      return this._http.patch('https://api.github.com/gists/' + id , editGistRequest)
          .map(res => res.json());
  }

  delUser(id: string) {
      return this._http.delete('https://api.github.com/gists/' + id)
          .map(res => res.json());
  }

}
