import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { routing } from './about-routing.module';

@NgModule({
  imports: [
    routing
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
