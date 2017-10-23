import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExhibitionsComponent } from './exhibitions.component';

const routes: Routes = [
  {path: '',
  component: ExhibitionsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
