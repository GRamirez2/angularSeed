import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
