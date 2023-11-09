import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P1Component } from './modules/test/pages/p1/p1.component';
import { P2Component } from './modules/test/pages/p2/p2.component';

const routes: Routes = [
  {
    path: 'p1',
    component: P1Component
  },
  {
    path: 'p2',
    component: P2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
