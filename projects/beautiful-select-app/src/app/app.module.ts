import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BeautifulListModule, BeautifulSelectModule } from 'beautiful-select';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BeautifulSelectModule,
    BeautifulListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
