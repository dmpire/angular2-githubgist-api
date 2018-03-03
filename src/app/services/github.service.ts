import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Gist } from '../models/gist';
import 'rxjs/add/operator/map';
import { GistFile } from '../models/gist-file';

@Injectable()
export class GithubService {
    private username: string;

    constructor(private _http: Http) {
        this.username = 'dmpire';
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.username)
            .map(res => res.json());
        // res stands for response. We are getting the response in json format.
    }

    getUserGist() {
        return this._http.get('https://api.github.com/users/' + this.username + '/gists')
            .map(res => res.json().map(element => {
                return {
                    description: element.description,
                    id: element.id,
                    public_: element.public,
                    files: Object.keys(element.files).map(key => {
                        return {
                            fileName: key,
                            raw_url: element.files[key].raw_url,
                            type: element.files[key].type
                        };
                    })
                };
            }));
    }

    getPublicGist() {
        return this._http.get('https://api.github.com/gists/public')
            .map(res => res.json());
    }

    createGist(newGist: Gist) {
        const createGistRequest = {
            'description': newGist.description,
            'public': newGist.public_ ? true : false,
            'files': {}
        };
        const files = {};
        newGist.files.forEach(file => {
            if (file.fileName) {
                files[file.fileName] = {
                    content: file.content
                };
            }
        });
        createGistRequest.files = files;
        console.log(createGistRequest);
        return this._http.post('https://api.github.com/gists', JSON.stringify(createGistRequest))
            .map(res => res.json());
    }

    editGist(id: string, gist: Gist) {
        const editGistRequest = {
            'description': gist.description,
            'public': gist.public_,
            'files': gist.files
        };
        return this._http.patch('https://api.github.com/gists/' + id, editGistRequest)
            .map(res => res.json());
    }

    getSingleGist(id: string) {
        return this._http.get('https://api.github.com/gists/' + id)
            .map(res => {
                const body = res.json();
                return {
                    description: body.description,
                    id: body.id,
                    public_: body.public,
                    files: Object.keys(body.files).map(key => {
                        return {
                            fileName: key,
                            raw_url: body.files[key].raw_url,
                            type: body.files[key].type,
                            content: ''
                        };
                    })
                };

            });
    }

    delUser(id: string) {
        return this._http.delete('https://api.github.com/gists/' + id)
            .map(res => res.json());
    }

}
