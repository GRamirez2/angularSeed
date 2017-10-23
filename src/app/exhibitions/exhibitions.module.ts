import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './exhibitions-routing.module';
import { ExhibitionsComponent } from './exhibitions.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ExhibitionsComponent]
})
export class ExhibitionsModule { }
