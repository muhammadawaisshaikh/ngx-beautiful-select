import { NgModule } from '@angular/core';
import { BeautifulSelectComponent } from './beautiful-select.component';

import { BeautifulListModule } from './components/beautiful-list/beautiful-list.module';

// list of modules used in this library 
const NgXModules = [
  BeautifulListModule
]

@NgModule({
  declarations: [
    BeautifulSelectComponent
  ],
  imports: [
    ...NgXModules
  ],
  exports: [
    BeautifulSelectComponent,
    ...NgXModules
  ]
})
export class BeautifulSelectModule { }
