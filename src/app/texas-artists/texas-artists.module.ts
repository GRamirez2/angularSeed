import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './texas-artists-routing.module';
import { TexasArtistsComponent } from './texas-artists.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TexasArtistsComponent]
})
export class TexasArtistsModule { }
