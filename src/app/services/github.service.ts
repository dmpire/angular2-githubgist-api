// This will allow us add this service to our app as a dependency using dependency injections
import { Injectable } from '@angular/core';
// This will help us to use the http get request in our app.
import { Http, Headers } from '@angular/http';
// This is to help us map our observable response to our component.
import 'rxjs/add/operator/map';

import { Classes } from '../classes';

// This is a decorator.
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

    createGist(newGist: Classes) {
        const createGistRequest = {
            'description': newGist.description,
            'public': newGist.public_,
            'files': newGist.files
        };
        return this._http.post('https://api.github.com/gists', createGistRequest)
            .map(res => res.json());
    }

    editGist(id: string, gist: Classes) {
        const editGistRequest = {
            'description': gist.description,
            'public': gist.public_,
            'files': gist.files
        };
        return this._http.patch('https://api.github.com/gists/' + id , editGistRequest)
            .map(res => res.json());
    }

    delUser(id: string) {
        return this._http.delete('https://api.github.com/gists/'+ id)
            .map(res => res.json());
    }

}
