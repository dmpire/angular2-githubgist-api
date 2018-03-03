import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CreateGistComponent } from './components/create-gist/create-gist.component';

import { GithubService } from './services/github.service';
import { HomeComponent } from './components/home/home.component';
import { EditGistComponent } from './components/edit-gist/edit-gist.component';
import { ListGistComponent } from './components/list-gist/list-gist.component';
import { SingleGistComponent } from './components/single-gist/single-gist.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create-gist',
    component: CreateGistComponent
  },
  {
    path: 'edit-gist/:id',
    component: EditGistComponent
  },
  {
    path: 'list-gist',
    component: ListGistComponent
  },
  {
    path: 'single-gist/:id',
    component: SingleGistComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateGistComponent,
    HomeComponent,
    EditGistComponent,
    ListGistComponent,
    SingleGistComponent
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
