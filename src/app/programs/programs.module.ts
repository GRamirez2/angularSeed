import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsComponent } from './programs.component';


@NgModule({
  imports: [
    CommonModule,
    ProgramsRoutingModule
  ],
  declarations: [ProgramsComponent]
})
export class ProgramsModule { }
