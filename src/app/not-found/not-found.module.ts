import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { routing } from './not-found-routing.module';

@NgModule({
    imports: [
        routing,
        RouterModule
    ],
    declarations: [NotFoundComponent]
})
export class NotFoundModule {}