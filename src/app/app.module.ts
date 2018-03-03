import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CreateGistComponent } from './components/create-gist/create-gist.component';

import {GithubService} from './services/github.service';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
},
{
  path: 'create-gist',
  component: CreateGistComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateGistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
     appRoutes,
  )
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
