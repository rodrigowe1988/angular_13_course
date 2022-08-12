import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TesteComponent } from './components/teste/teste.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    ParentDataComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
