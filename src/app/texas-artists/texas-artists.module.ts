import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TexasArtistsRoutingModule } from './texas-artists-routing.module';
import { TexasArtistsComponent } from './texas-artists.component';

@NgModule({
  imports: [
    CommonModule,
    TexasArtistsRoutingModule
  ],
  declarations: [TexasArtistsComponent]
})
export class TexasArtistsModule { }
