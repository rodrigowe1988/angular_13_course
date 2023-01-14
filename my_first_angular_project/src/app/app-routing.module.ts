import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';

import { ChartJsComponent } from './components/chart-js/chart-js.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventsComponent } from './components/events/events.component';
import { FormsComponent } from './components/forms/forms.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TableListRenderComponent } from './components/table-list-render/table-list-render.component';
import { TesteComponent } from './components/teste/teste.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';

const routes: Routes = [
  { path: '', component: TesteComponent },
  {
    path: 'parent-data',
    component: ParentDataComponent,
    data: { testando: 'testando' },
  },
  { path: 'list', component: ListRenderComponent },
  { path: 'list/:id', component: ItemDetailComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'if-render', component: IfRenderComponent },
  { path: 'events', component: EventsComponent },
  { path: 'table', component: TableListRenderComponent },
  { path: 'char', component: ChartJsComponent },
  { path: 'emitter', component: EmitterComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'two-way-binding', component: TwoWayDataBindingComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'forms', component: FormsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
