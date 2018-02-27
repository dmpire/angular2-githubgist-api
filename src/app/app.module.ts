import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.homeComponent';
import { CreateComponent } from './createGist/create.createComponent';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
},
{
  path: 'create-gist',
  component: CreateComponent
}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,
        RouterModule.forRoot(
         appRoutes,
      )
  ],
  providers: [HttpModule],
  declarations: [ AppComponent, HomeComponent, CreateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
