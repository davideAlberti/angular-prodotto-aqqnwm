import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MagazzinoComponent } from './magazzino/magazzino.component';
import { FornitoriComponent } from './fornitori/fornitori.component';

const routes: Routes = [
  { path: '', redirectTo: '/magazzino', pathMatch: 'full' },
  { path: 'magazzino', component: MagazzinoComponent },
  { path: 'fornitori', component: FornitoriComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }