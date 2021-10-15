import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BeautifulSelectModule } from 'beautiful-select';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BeautifulSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
