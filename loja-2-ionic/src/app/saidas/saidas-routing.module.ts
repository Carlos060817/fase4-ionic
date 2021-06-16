import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaidasPage } from './saidas.page';

const routes: Routes = [
  {
    path: '',
    component: SaidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaidasPageRoutingModule {}
