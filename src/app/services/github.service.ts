// This will allow us add this service to our app as a dependency using dependency injections
import { Injectable } from '@angular/core';
// This will help us to use the http get request in our app.
import { Http, Headers } from '@angular/http';
// This is to help us map our observable response to our component.
import 'rxjs/add/operator/map';

// This is a decorator.
@Injectable()
export class GithubService {
    private username:string;

    constructor(private _http:Http){
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
    // res stands for response. We are getting the response in json format.
    }

    getPublicGist() {
        return this._http.get('https://api.github.com/gists/public')
            .map(res => res.json());
    // res stands for response. We are getting the response in json format.
    }

    createGist() {
        return this._http.post('https://api.github.com/gists', 'newFile')
            .map(res => res.json());
    // res stands for response. We are getting the response in json format.
    }

    editGist() {
        return this._http.patch('https://api.github.com/gists/:id' , 'files')
            .map(res => res.json());
    // res stands for response. We are getting the response in json format.
    }

    delUser() {
        return this._http.delete('https://api.github.com/gists/:id')
            .map(res => res.json());
    // res stands for response. We are getting the response in json format.
    }

}
