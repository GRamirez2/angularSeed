import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TexasArtistsComponent } from './texas-artists.component';

const routes: Routes = [
  {path: '',
  component: TexasArtistsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
