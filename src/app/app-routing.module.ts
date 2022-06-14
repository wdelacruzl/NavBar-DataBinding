import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {path:'home', component: DummyComponent},
  {path:'About Me', component: DummyComponent},
  {path:'Projects', component: DummyComponent},
  {path:'', component: InputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
