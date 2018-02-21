import { Component } from '@angular/core';
import { HomeComponent } from './home/home.homeComponent';
import { GithubService } from './services/github.service';
import { HttpModule } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // directives: [HomeComponent],
  // When using a service, we add it as a provider.
  providers: [HttpModule, GithubService]
})
export class AppComponent  { name = 'Angular'; }
