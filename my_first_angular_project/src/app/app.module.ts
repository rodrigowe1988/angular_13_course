import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TesteComponent } from './components/teste/teste.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EventsComponent } from './components/events/events.component';
import { ChartJsComponent } from './components/chart-js/chart-js.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    ParentDataComponent,
    DirectivesComponent,
    EventsComponent,
    ChartJsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
