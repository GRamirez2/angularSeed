import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '',
    component: HomeComponent},

    { path: 'home',
    component: HomeComponent},

    {path: 'about',
    loadChildren: './about/about.module#AboutModule'},

    {path: 'exhibitions',
    loadChildren: './exhibitions/exhibitions.module#ExhibitionsModule'},

    {path: 'programs',
    loadChildren: './programs/programs.module#ProgramsModule'},

    {path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'},

    {path: 'texas-artists',
    loadChildren: './texas-artists/texas-artists.module#TexasArtistsModule'},

    {path: 'not-found',
    loadChildren: './not-found/not-found.module#NotFoundModule'},

    { path: '**',
      redirectTo: 'not-found'}
];