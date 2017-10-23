import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './programs-routing.module';
import { ProgramsComponent } from './programs.component';


@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ProgramsComponent]
})
export class ProgramsModule { }
