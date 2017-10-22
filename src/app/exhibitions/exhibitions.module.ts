import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibitionsRoutingModule } from './exhibitions-routing.module';
import { ExhibitionsComponent } from './exhibitions.component';

@NgModule({
  imports: [
    CommonModule,
    ExhibitionsRoutingModule
  ],
  declarations: [ExhibitionsComponent]
})
export class ExhibitionsModule { }
