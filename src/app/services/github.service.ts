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

}
