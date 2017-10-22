import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TexasArtistsComponent } from './texas-artists.component';

const routes: Routes = [
  {path: '',
  component: TexasArtistsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TexasArtistsRoutingModule { }
