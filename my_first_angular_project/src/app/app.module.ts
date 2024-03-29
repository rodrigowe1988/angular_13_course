import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TesteComponent } from './components/teste/teste.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EventsComponent } from './components/events/events.component';
import { ChartJsComponent } from './components/chart-js/chart-js.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TableListRenderComponent } from './components/table-list-render/table-list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    ParentDataComponent,
    DirectivesComponent,
    EventsComponent,
    ChartJsComponent,
    IfRenderComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    TableListRenderComponent,
    PipesComponent,
    TwoWayDataBindingComponent,
    ItemDetailComponent,
    CalculatorComponent,
    HeaderComponent,
    FormsComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
