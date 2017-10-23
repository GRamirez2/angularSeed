import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramsComponent } from './programs.component';

const routes: Routes = [
  {path: '',
  component: ProgramsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
