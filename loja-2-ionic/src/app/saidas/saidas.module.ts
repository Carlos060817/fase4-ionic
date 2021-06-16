import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaidasPageRoutingModule } from './saidas-routing.module';

import { SaidasPage } from './saidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaidasPageRoutingModule
  ],
  declarations: [SaidasPage]
})
export class SaidasPageModule {}
