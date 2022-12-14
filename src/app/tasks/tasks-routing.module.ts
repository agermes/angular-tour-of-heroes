import { HeroesComponent } from '../heroes/components/heroes-page/heroes-page.component';
import { HeroTypeComponent } from '../heroes/components/hero-type/hero-type.component';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch:'full' },
  { path: 'list', component: TodosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
