import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.homeComponent';
import { Classes } from './classes';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  providers: [HttpModule],
  declarations: [ AppComponent, HomeComponent , Classes],
  bootstrap:    [ AppComponent ],
  exports: [ Classes ]
})
export class AppModule { }
