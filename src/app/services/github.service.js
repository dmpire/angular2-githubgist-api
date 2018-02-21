"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// This will allow us add this service to our app as a dependency using dependency injections
var core_1 = require("@angular/core");
// This will help us to use the http get request in our app.
var http_1 = require("@angular/http");
// This is to help us map our observable response to our component.
require("rxjs/add/operator/map");
// This is a decorator.
var GithubService = (function () {
    function GithubService(_http) {
        this._http = _http;
        console.log('Github Service Ready...');
        this.username = 'dmpire';
    }
    GithubService.prototype.getUser = function () {
        return this._http.get('https://api.github.com/users/' + this.username + '/gists')
            .map(function (res) { return res.json(); });
        // res stands for response. We are getting the response in json format.
    };
    return GithubService;
}());
GithubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GithubService);
exports.GithubService = GithubService;
//# sourceMappingURL=github.service.js.map