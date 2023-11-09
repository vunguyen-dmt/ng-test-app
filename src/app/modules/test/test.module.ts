import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { P1Component } from './pages/p1/p1.component';
import { P2Component } from './pages/p2/p2.component';


@NgModule({
  declarations: [
    P1Component,
    P2Component
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
