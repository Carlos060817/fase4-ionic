import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstoquesPage } from './estoques.page';

const routes: Routes = [
  {
    path: '',
    component: EstoquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstoquesPageRoutingModule {}
